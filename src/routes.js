import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import Dicas from './pages/Dicas'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import SeuBebe from './pages/SeuBebe'
import Perfil from './pages/Perfil'
import Teste from './pages/Teste'
import ButtonNew from './components/ButtonNew'

import {Entypo, Feather,FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Routes(){
    return(
        <Tab.Navigator 
            initialRouteName="Cadastro"
            screenOptions={{ headerTitleAlign:"center"}}
      
       >
            <Tab.Screen name="Dicas" component={Cadastro}  options={{
                  headerTintColor:'#7ea8cb',
                  headerTitleStyle:{fontWeight:'bold',alignSelf:'center',fontSize:30},
                tabBarIcon:({size,color}) =>(
                    <FontAwesome5 name="book" size={size} color={'#7EA8CB'}/>
                ),
                tabBarActiveTintColor: '#7EA8CB',
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight:'bold'
                  },
            }}/>

<Tab.Screen name="Seu Bebê" component={SeuBebe} options={{
    headerTintColor:'#7ea8cb',
    headerTitleStyle:{fontWeight:'bold',alignSelf:'center',fontSize:30},
    tabBarActiveTintColor: '#7EA8CB',
    tabBarLabelStyle: {
        fontSize: 11,
        fontWeight:'bold'
      },
    tabBarIcon:({size,color}) =>(
        <FontAwesome5 name="baby" size={size} color={'#7EA8CB'}/>
    )
}}/>

            <Tab.Screen name="Home" component={Home} options={{
                headerTintColor:'#7ea8cb',
                headerTitleStyle:{fontWeight:'bold',alignSelf:'center',fontSize:30},
                tabBarLabel: '',
                tabBarIcon:({size,color}) => (
                        
                        <ButtonNew size={size} color={'#fff'}/>
                )
            }}/>

<Tab.Screen name="Perfil" component={Perfil} options={{
    headerTintColor:'#7ea8cb',
    headerTitleStyle:{fontWeight:'bold',alignSelf:'center',fontSize:30},
    tabBarActiveTintColor: '#7EA8CB',
    tabBarLabelStyle: {
        fontSize: 11,
        fontWeight:'bold'
      },
    tabBarIcon:({size,color}) =>(
        <FontAwesome5 name="user" size={size} color={'#7EA8CB'}/>
    )
}}/>

<Tab.Screen name="Configuração" component={Teste} options={{
                headerTintColor:'#7ea8cb',
                headerTitleStyle:{fontWeight:'bold',alignSelf:'center',fontSize:30},
                tabBarActiveTintColor: '#7EA8CB',
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight:'bold'
                  },
                tabBarIcon:({size,color}) =>(
                    <FontAwesome5 name="cog" size={size} color={'#7EA8CB'}/>
                )
            }}/>



        </Tab.Navigator>

        
    )
}


export default function RotasGerais(){
    return(
        <>
        <Routes/>
        </>
    );
}