import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Audio } from "expo-av";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  const [isFetching, setFetching] = useState(false);
  const [status, setStatus] = useState("");
  const [, setLoading] = useState("");
  const [query, setQuery] = useState("");
  const [audioRecording, setAudioRecording] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNFVisible, setModalNFVisible] = useState(false);
  const [recording, setRecording] = React.useState();
  const [isRecording, setIsRecording] = useState(false);

  async function startRecording() {
    try {
      setStatus("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      setStatus("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setStatus("Recording started");
    } catch (err) {
      setStatus("Failed to start recording" + err);
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    if (!recording) return;

    setStatus("Stopping recording..");
    setRecording();

    setIsRecording(false);
    console.log("Parando gravação...");
    await recording.stopAndUnloadAsync();
    console.log("Gravação encerrada.");

    const uri = recording.getURI();

    FileSystem.getInfoAsync(uri)
      .then((info) => {
        console.log("Arquivo acessado ==> " + JSON.stringify(info.uri))
        setStatus("Arquivo acessado ==> " + JSON.stringify(info.uri));
        const formData = new FormData();

        formData.append("file", {
          uri: info.uri,
          name: "audio.wav",
          type: "audio/wav",
        });

        let endpointApi = "http://localhost:8000/choro";

        fetch(endpointApi, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(
              "==========================REPONSE============================================"
            );
            console.log("Response: ", json);
            if (JSON.stringify(json.choro) == 1) {
              setModalVisible(true);
              alert("Teste" + JSON.stringify(json.choro));
            } else {
              setModalNFVisible(true);
            }
          })
          .catch((error) => {
            setStatus("Erro - " + error.message);
            console.error(
              `Erro na chamada da API ${endpointApi}: ` + error.message
            );
            return error;
          })
          .finally(() => setLoading(false));
      })
      .catch((err) => {
        setStatus("Erro acessando o arquivo ==> " + err);
        console.error("Erro acessando o arquivo ==> " + err);
      });
    setStatus("Recording stopped and stored at" + uri);
    setStatus(`FILE INFO: ${JSON.stringify(info)}`);
    getTranscription(uri);
  }

  const getTranscription = async (uri) => {
    setFetching(true);
    try {
      const info = await FileSystem.getInfoAsync(uri);
      setStatus(`FILE INFO: ${JSON.stringify(info)}`);
      const uri = info.uri;
      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'audio/x-wav',
        // could be anything
        name: 'speech2text',
      });
      const response = await fetch(config.CLOUD_FUNCTION_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setQuery(data.transcript);
      setStatus('Audio decodificado ' + data.transcript);
    } catch (error) {
      setStatus('There was an error' + error);
      stopRecording();
      resetRecording();
    }
    setFetching(false);
  };

  return (
    <View style={styles.geral}>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.geMod}>
          <View style={styles.modPrincipal}>
            <View style={styles.ciModal}>
              <View style={{ marginLeft: 2 }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <FontAwesome name="arrow-left" style={styles.voltFle} />
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: "25%" }}>
                <Text
                  style={{
                    fontSize: 37,
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  FOME
                </Text>
              </View>
            </View>
            <ScrollView>
              <View
                style={{
                  borderBottomWidth: 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderColor: "#7ea8cb",
                }}
              >
                <Text style={styles.tiModalRes}>SEU BEBÊ ESTÁ COM FOME</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  paddingBottom: 10,
                  borderColor: "#7ea8cb",
                  marginTop: 5,
                }}
              >
                <View style={styles.carFo}>
                  <MaterialCommunityIcons
                    name="baby-bottle-outline"
                    style={styles.icFo}
                  />
                </View>
                <Text style={styles.tiModal}>
                  <Entypo style={styles.itiModal} name="triangle-right" />
                  Como dar os alimentos?
                </Text>
                <Text style={styles.texModal}>
                  De os alimentos amassados com o auxílio de um garfo ou em
                  pedaços bem macios, com cortes que o bebê possa segurar.
                  Evolua aos poucos, conforme ele for ficando confortável. Só é
                  importante não usar liquidificador, mixer ou peneira, para que
                  ele se acostume com diferentes texturas.
                </Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.tiModal}>
                  <Entypo style={styles.itiModal} name="triangle-right" />
                  Alimentos saudáveis
                </Text>
                <Text style={styles.texModal}>-&gt;Banana</Text>
                <Text style={styles.texModal}>
                  Fonte de fibras, potássio e vitaminas C. Uma das frutas mais
                  aceitas pelo bebê
                </Text>
                <Text style={styles.texModal}>-&gt;Abacate</Text>
                <Text style={styles.texModal}>
                  Também agrada pelo sabor e textura macia.
                </Text>
                <Text style={styles.texModal}>-&gt;Mamão</Text>
                <Text style={styles.texModal}>
                  Na fase de introdução alimentar, é comum os bebês ficarem
                  constipados. O mamão é uma fruta laxativa ou seja, auxilia o
                  trânsito intestinal
                </Text>
                <Text style={styles.texModal}>-&gt;Ovo</Text>
                <Text style={styles.texModal}>
                  O ovo pode e deve fazer parte da introdução alimentar. Sempre
                  cozido, com a gema dura, por cerca de dez minutos após a
                  fervura da água. No início, ofereça-o ralado, depois em
                  pedacinhos ou outras receitas, como mexido e omelete, com um
                  fiozinho de azeite.
                </Text>
                <Text style={styles.texModal}>-&gt;Carne bovina/Frango</Text>
                <Text style={styles.texModal}>
                  Podem ser oferecidos em pedaços bem pequenos,pois o bebê não
                  ainda não consegue mastigá-la.
                </Text>
                <Text style={styles.texModal}>-&gt;Feijão/Lentilha </Text>
                <Text style={styles.texModal}>
                  São alimentos que não podem faltar no prato.
                </Text>
                <Text style={styles.texModal}>-&gt;Legumes e verduras</Text>
                <Text style={styles.texModal}>
                  Vale cozinhar o que for possível no vapor para preservar
                  melhor os nutrientes. Alguns são: batata, cenoura, brócolis,
                  chuchu, abobrinha e etc
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal visible={modalNFVisible} animationType="slide" transparent={true}>
        <View style={styles.geModN}>
          <View style={styles.modPrincipalN}>
            <View style={styles.ciModal}>
              <View style={{ marginLeft: 2 }}>
                <TouchableOpacity
                  onPress={() => setModalNFVisible(!modalNFVisible)}
                >
                  <FontAwesome name="arrow-left" style={styles.voltFle} />
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: "18%" }}>
                <Text
                  style={{
                    fontSize: 37,
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  OUTROS
                </Text>
              </View>
            </View>
            <ScrollView>
              <View
                style={{
                  borderBottomWidth: 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderColor: "#7ea8cb",
                }}
              >
                <Text style={styles.tiModalRes}>
                  SEU BEBÊ NÃO ESTÁ COM FOME
                </Text>
              </View>
              <View style={styles.carFo}>
                <FontAwesome5 name="book" style={styles.icFo} />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.texModal}>
                  <FontAwesome
                    style={styles.texModal}
                    name="exclamation-circle"
                  />{" "}
                  Acesse a página de dicas para saber sobre outras possíveis
                  causas do choro
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <View style={styles.marTudo}>
        <TouchableOpacity
          style={styles.touchableBox}
          onPress={recording ? stopRecording : startRecording}
        >
          {recording ? (
            <MaterialIcons name="multitrack-audio" style={styles.recA} />
          ) : (
            <FontAwesome name="microphone" style={styles.microF} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  geral: {
    backgroundColor: "#dae6f0",
    flex: 1,
  },
  touchableBox: {
    borderRadius: 500,
    paddingVertical: 10,
    paddingHorizontal: 55,
    marginVertical: 130,
    alignSelf: "center",
    backgroundColor: "#7ea8cb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 8,
  },
  microF: {
    color: "white",
    fontSize: 270,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
  },
  recA: {
    color: "white",
    fontSize: 270,
    marginHorizontal: -38,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 8,
  },
  marTudo: {
    flex: 13,
  },
  geMod: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  geModN: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modPrincipal: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    height: "90%",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modPrincipalN: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    height: "44%",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  ciModal: {
    flexDirection: "row",
    backgroundColor: "#7ea8cb",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#7ea8cb",
  },
  tiModal: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7ea8cb",
  },
  tiModalRes: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7ea8cb",
    textAlign: "center",
  },
  texModal: {
    textAlign: "justify",
    fontSize: 21,
  },
  voltFle: {
    fontSize: 32,
    color: "#ffffff",
  },
  itiModal: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7ea8cb",
    alignItems: "center",
  },
  carFo: {
    backgroundColor: "#7ea8cb",
    width: 100,
    height: 100,
    borderRadius: 100,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 7.65,
    marginLeft: "33%",
    marginTop: 5,
  },
  icFo: {
    color: "white",
    paddingTop: 15,
    fontSize: 70,
    alignSelf: "center",
  },
});
