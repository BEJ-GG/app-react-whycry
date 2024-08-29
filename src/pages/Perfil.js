import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Perfil({navigation}) {

  
 return(
  <View style={styles.container}>
  <View style={styles.profileContainer}>
    <View style={styles.profileImageContainer}>
      <Icon name="user" size={120} color="#7EA8CB" style={styles.profileIcon} />
    </View>
    <View style={styles.profileInfo}>
      <Text style={styles.name}>Seu Nome</Text>
      <TouchableOpacity style={styles.editButton}>
        <Icon name="edit" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.detailsContainer}>
    <View style={styles.detailRow}>
      <View style={styles.detailCircle} />
      <Text style={styles.detailText}>Idade: 30 anos</Text>
    </View>
    <View style={styles.detailRow}>
      <View style={styles.detailCircle} />
      <Text style={styles.detailText}>Email: seuemail@example.com</Text>
    </View>
    <View style={styles.detailRow}>
      <View style={styles.detailCircle} />
      <Text style={styles.detailText}>Telefone: (00) 1234-5678</Text>
    </View>
    <View style={styles.detailRow}>
      <View style={styles.detailCircle} />
      <Text style={styles.detailText}>Genêro: Feminino</Text>
    </View>
  </View>
</View>
);
}


const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor:'#DAE6F0',
    paddingHorizontal: 20,
    justifyContent:'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    alignSelf: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#7EA8CB',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7EA8CB',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7EA8CB',
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 20,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7EA8CB',
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#7EA8CB',
    fontWeight:'bold'
  },
});
