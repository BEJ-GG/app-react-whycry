import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/Home'
import Dicas from './pages/Dicas'
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
            initialRouteName="Home"
            screenOptions={{ headerTitleAlign:"center"}}
      
       >
            <Tab.Screen name="Dicas" component={Dicas} options={{
                tabBarIcon:({size,color}) =>(
                    <FontAwesome5 name="book" size={size} color={color}/>
                )
            }}/>

            <Tab.Screen name="Teste" component={Teste} options={{
                tabBarIcon:({size,color}) =>(
                    <FontAwesome5 name="user" size={size} color={color}/>
                )
            }}/>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: '',
                tabBarIcon:({size,color}) => (
                        
                        <ButtonNew size={size} color={color}/>
                )
            }}/>

<Tab.Screen name="Seu Bebê" component={SeuBebe} options={{
    tabBarIcon:({size,color}) =>(
        <FontAwesome5 name="baby" size={size} color={color}/>
    )
}}/>

<Tab.Screen name="Perfil" component={Perfil} options={{
    tabBarIcon:({size,color}) =>(
        <FontAwesome5 name="user" size={size} color={color}/>
    )
}}/>
        </Tab.Navigator>

        
    )
}

function MeuPrimeiroFluxo() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Home} />
      </Stack.Navigator>
    );
  }

export default function Zozo(){
    return(
        <>
        <Routes/>
        </>
    );
}