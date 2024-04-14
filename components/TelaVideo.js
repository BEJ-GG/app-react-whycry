import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import LogoWhy from '../assets/logWhy.png';

export default function TelaVideo() {
  return (
    <View style={styles.geral}>
      <View style={styles.marTudo}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 20,
            borderRadius: 200,
          }}>
          <Image
            source={LogoWhy}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 3,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginRight: 10,
                color: '#7ea8cb',
              }}>
              Enzo Bense Pagliacci
            </Text>
            <FontAwesome name="pencil" style={{ color: '#033d68' }} size={22} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 3,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginRight: 10,
                color: '#7ea8cb',
              }}>
              enzobpagliacci@gmail.com
            </Text>
            <FontAwesome name="pencil" style={{ color: '#033d68' }} size={22} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 3,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginRight: 10,
                color: '#7ea8cb',
              }}>
              528.830.418-14
            </Text>
            <FontAwesome name="pencil" style={{ color: '#033d68' }} size={22} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 3,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginRight: 10,
                color: '#7ea8cb',
              }}>
              (11)98968-3451
            </Text>
            <FontAwesome name="pencil" style={{ color: '#033d68' }} size={22} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 3,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginRight: 10,
                color: '#7ea8cb',
              }}>
              21/04/2003
            </Text>
            <FontAwesome name="pencil" style={{ color: '#033d68' }} size={22} />
          </View>
        </View>
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
    marginTop: 40,
    alignItems: 'center',
  },
});
