import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Dicas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCVisible, setModalCVisible] = useState(false);
  const [modalSVisible, setModalSVisible] = useState(false);
  const [modalAVisible, setModalAVisible] = useState(false);
  return (
    <View style={styles.geral}>
      <View style={styles.marTudo}>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.geMod}>
            <View style={styles.modPrincipal}>
              <View style={styles.ciModal}>
                <View style={{ marginLeft: 2 }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <FontAwesome name="arrow-left" style={styles.voltFle} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: '25%' }}>
                  <Text
                    style={{
                      fontSize: 37,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    FOME
                  </Text>
                </View>
              </View>
              <ScrollView>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    borderColor: '#7ea8cb',
                  }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />
                    Como dar os alimentos?
                  </Text>
                  <Text style={styles.texModal}>
                    De os alimentos amassados com o auxílio de um garfo ou em
                    pedaços bem macios, com cortes que o bebê possa segurar.
                    Evolua aos poucos, conforme ele for ficando confortável. Só
                    é importante não usar liquidificador, mixer ou peneira, para
                    que ele se acostume com diferentes texturas.
                  </Text>
                </View>
                <View style={{ marginTop: 5 }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />
                    Alimentos saudáveis
                  </Text>
                  <Text style={styles.texModal}>->Banana</Text>
                  <Text style={styles.texModal}>
                    Fonte de fibras, potássio e vitaminas C. Uma das frutas mais
                    aceitas pelo bebê
                  </Text>
                  <Text style={styles.texModal}>->Abacate</Text>
                  <Text style={styles.texModal}>
                    Também agrada pelo sabor e textura macia.
                  </Text>
                  <Text style={styles.texModal}>->Mamão</Text>
                  <Text style={styles.texModal}>
                    Na fase de introdução alimentar, é comum os bebês ficarem
                    constipados. O mamão é uma fruta laxativa ou seja, auxilia o
                    trânsito intestinal
                  </Text>
                  <Text style={styles.texModal}>->Ovo</Text>
                  <Text style={styles.texModal}>
                    O ovo pode e deve fazer parte da introdução alimentar.
                    Sempre cozido, com a gema dura, por cerca de dez minutos
                    após a fervura da água. No início, ofereça-o ralado, depois
                    em pedacinhos ou outras receitas, como mexido e omelete, com
                    um fiozinho de azeite.
                  </Text>
                  <Text style={styles.texModal}>->Carne bovina/Frango</Text>
                  <Text style={styles.texModal}>
                    Podem ser oferecidos em pedaços bem pequenos,pois o bebê não
                    ainda não consegue mastigá-la.
                  </Text>
                  <Text style={styles.texModal}>->Feijão/Lentilha </Text>
                  <Text style={styles.texModal}>
                    São alimentos que não podem faltar no prato.
                  </Text>
                  <Text style={styles.texModal}>->Legumes e verduras</Text>
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

        <Modal visible={modalCVisible} animationType="slide" transparent={true}>
          <View style={styles.geMod}>
            <View style={styles.modPrincipal}>
              <View style={styles.ciModal}>
                <View style={{ marginLeft: 2 }}>
                  <TouchableOpacity
                    onPress={() => setModalCVisible(!modalCVisible)}>
                    <FontAwesome name="arrow-left" style={styles.voltFle} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: '20%' }}>
                  <Text
                    style={{
                      fontSize: 37,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    CÓLICA
                  </Text>
                </View>
              </View>
              <ScrollView>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    borderColor: '#7ea8cb',
                  }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />O
                    que causa cólicas?
                  </Text>
                  <Text style={styles.texModal}>
                    Algumas explicações possíveis são:
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />O
                    sistema digestivo do bebê ainda está se desenvolvendo,
                    causando desconforto, que o bebê comunica com o choro.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />O
                    refluxo pode estar fazendo o bebê se sentir desconfortável.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />O bebê
                    está com gases e isso causa o desconforto.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Algumas pesquisas sugerem que as alergias alimentares (a
                    alérgenos a que os bebês são expostos no leite materno ou
                    nas fórmulas) ou a exposição à fumaça do cigarro podem
                    causar cólicas.
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />
                    Como aliviar as cólicas?
                  </Text>
                  <Text style={styles.texModal}>
                    1.Massagear a barriguinha do bebê com movimentos circulares,
                    com o auxílio de um óleo infantil ou creme hidratante;
                  </Text>
                  <Text style={styles.texModal}>
                    2.Aquecer o abdômen com uma bolsa de água quente, tendo
                    cuidado para não deixar muito quente, de forma a evitar
                    queimaduras;
                  </Text>
                  <Text style={styles.texModal}>
                    3.Com o bebê deitado de barriga para cima, empurrar as
                    perninhas em direção ao abdômen, de forma a comprimir
                    ligeiramente a barriga;
                  </Text>
                  <Text style={styles.texModal}>
                    4.Fazer movimentos de bicicleta com as perninhas do bebê;
                  </Text>
                  <Text style={styles.texModal}>
                    5.Colocar o bebê para arrotar depois de cada mamada;
                  </Text>
                  <Text style={styles.texModal}>
                    6.Dar um banho morno no bebê;
                  </Text>
                  <Text style={styles.texModal}>
                    7.Colocar o bebê em contato com a pele de um dos pais;
                  </Text>
                  <Text style={styles.texModal}>
                    8.Preferir amamentar o bebê em vez de dar a mamadeira;
                  </Text>
                  <Text style={styles.texModal}>
                    9.Usar medicamentos que estimulem a liberação dos gases,
                    como a simeticona em gotas, mas apenas se for recomendado
                    pelo médico.
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <Modal visible={modalSVisible} animationType="slide" transparent={true}>
          <View style={styles.geMod}>
            <View style={styles.modPrincipal}>
              <View style={styles.ciModal}>
                <View style={{ marginLeft: 2 }}>
                  <TouchableOpacity
                    onPress={() => setModalSVisible(!modalSVisible)}>
                    <FontAwesome name="arrow-left" style={styles.voltFle} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: '25%' }}>
                  <Text
                    style={{
                      fontSize: 37,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    SONO
                  </Text>
                </View>
              </View>
              <ScrollView>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    borderColor: '#7ea8cb',
                  }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />
                    Como acalmar o bebê?
                  </Text>
                  <Text style={styles.texModal}>
                    Tente distrair um pouco (tirar o foco do choro com
                    atividades calmas) e fique com o bebê no colo até ele se
                    acalmar.
                  </Text>
                  <Text style={styles.texModal}>
                    Em muitos casos, é necessário ajudar o bebê a entrar no
                    sono, com um balanço leve, fora do quarto, para que ele nem
                    perceba que está relaxando para dormir.{' '}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />
                    Os sinais de sono são:
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Bocejo
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Olhar parado
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Coçar as orelhas
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Esfregar os olhos
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Procurar mais colo
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Perder o interesse nas brincadeiras
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Esfregar o rosto no peito do cuidador
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <Modal visible={modalAVisible} animationType="slide" transparent={true}>
          <View style={styles.geMod}>
            <View style={styles.modPrincipal}>
              <View style={styles.ciModal}>
                <View style={{ marginLeft: 2 }}>
                  <TouchableOpacity
                    onPress={() => setModalAVisible(!modalAVisible)}>
                    <FontAwesome name="arrow-left" style={styles.voltFle} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: '19%' }}>
                  <Text
                    style={{
                      fontSize: 37,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    ARROTO
                  </Text>
                </View>
              </View>
              <ScrollView>
                <View
                  style={{
                    marginTop: 10,
                    paddingBottom: 10,
                  }}>
                  <Text style={styles.tiModal}>
                    <Entypo style={styles.itiModal} name="triangle-right" />
                    Como ajudar o bebê a arrotar?
                  </Text>

                  <Text style={styles.texModal}>
                    1.Fique atento aos sinais e às caretas do seu bebê
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Se, durante o processo de amamentação, seu filho parar de
                    tomar leite e começar a chorar, este pode ser um sinal de
                    que ele precisa arrotar mas não está conseguindo.
                  </Text>
                  <Text style={styles.texModal}>
                    2.Nunca coloque o seu bevê deitado após a mamada.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />O ato de
                    arrotar evita o refluxo e o engasgamento. Por isso, é
                    indicado que, depois de terminar a mamada, você coloque a
                    cabecinha do seu filho mais elevada que o corpo.
                  </Text>
                  <Text style={styles.texModal}>
                    3.Após as mamadas, coloque o bebê de pé para arrotar.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Em pé é a melhor posição para o seu bebê arrotar, pois o
                    corpinho estará ereto, o que estimulará a saída de gases
                    pela boca. Segure o bebê nesta posição no colo por alguns
                    segundos até ouvir um barulhinho saindo da boca do pequeno.
                  </Text>
                  <Text style={styles.texModal}>
                    4.Massageie as costas do seu filho.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                    Esta é uma das formas que também poderá facilitar o arroto do seu bebê. Neste caso, apoie a cabecinha do bebê no seu ombro e massageie levemente suas costas. Coloque um paninho no ombro caso haja regurgitação, para não se sujar.
                  </Text>
                  <Text style={styles.texModal}>
                    5.Coloque o bebê sentadinho no seu colo.
                  </Text>
                  <Text style={styles.texModal}>
                    <Entypo style={styles.texModal} name="dot-single" />
                   Outra posição possível para o seu bebê arrotar é colocando ele sentadinho no seu colo, de frente ou de costas para você. Neste caso, incline o tronco dele para a frente, com as perninhas flexionadas, sempre apoiado no braço da mãe ou de outro familiar. Uma massagem nas costas ou tapinhas leves também podem ajudar.
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <View style={styles.carLinhaUm}>
          <View>
            <Pressable
              onPress={() => setModalVisible(true)}
              style={styles.carFo}>
              <MaterialCommunityIcons
                name="baby-bottle-outline"
                style={styles.icFo}
              />
            </Pressable>
            <Text style={styles.textCar}>FOME</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Pressable
              onPress={() => setModalCVisible(true)}
              style={styles.carFo}>
              <MaterialCommunityIcons name="human-baby-changing-table" style={styles.icFo} />
            </Pressable>
            <Text style={styles.textCar}>CÓLICA</Text>
          </View>
        </View>

        <View style={styles.carLinhaUm}>
          <View>
            <Pressable
              onPress={() => setModalSVisible(true)}
              style={styles.carFo}>
              <MaterialCommunityIcons name="sleep" style={styles.icFo} />
            </Pressable>
            <Text style={styles.textCar}>SONO</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Pressable
              onPress={() => setModalAVisible(true)}
              style={styles.carFo}>
              <Feather name="wind" style={styles.icFo} />
            </Pressable>
            <Text style={styles.textCar}>ARROTO</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  geral: {
    backgroundColor: '#dae6f0',
    flex: 1,
  },
  marTudo: {
    flex: 1,
    justifyContent: 'center',
  },
  geMod: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modPrincipal: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    height: '90%',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    ciModal: {
      flexDirection: 'row',
      backgroundColor: '#7ea8cb',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#7ea8cb',
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  carLinhaUm: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  carFo: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 7.65,
  },
  icFo: {
    color: '#7ea8cb',
    paddingTop: 25,
    fontSize: 100,
    alignSelf: 'center',
  },
  textCar: {
    marginTop: 5,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    shadowColor: '#000',
    textDecorationLine: 'underline',
  },
  tiModal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7ea8cb',
    marginBottom: 3,
  },
  itiModal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7ea8cb',
    alignItems: 'center',
  },
  texModal: {
    textAlign: 'justify',
    fontSize: 21,
  },
  ciModal: {
    flexDirection: 'row',
    backgroundColor: '#7ea8cb',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7ea8cb',
  },
  voltFle: {
    fontSize: 32,
    color: '#ffffff',
  },
});
