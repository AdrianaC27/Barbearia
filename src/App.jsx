import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Login from "./components/Login";
import Profissional from "./components/Profissional";
import Tipos from "./components/Tipos";
import Nomes from "./components/Nomes";
import Produtos from "./components/Produtos";
import Filtros from "./components/Filtros";
import FiltrosProdutos from "./components/FiltrosProdutos";
import Compras from "./components/Compras";

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login"
                    screenOptions={{
                        StActiveBackgroundColor:'#1679AB',
                        drawerActiveTintColor: '#C5FF95',
                        drawerPosition:'left'

                    }}>

                <Stack.Screen name ='Login'component={Login} options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/> 
                <Stack.Screen name ='Profissional' component={Profissional} options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>  
                
                <Stack.Screen name ='Tipos'component={Tipos}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>    

                <Stack.Screen name ='Nomes'component={Nomes}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>    

                <Stack.Screen name ='Produtos'component={Produtos}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/> 

                <Stack.Screen name ='Filtros'component={Filtros}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>  

                <Stack.Screen name ='FiltrosProdutos'component={FiltrosProdutos}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>  

<               Stack.Screen name ='Compras'component={Compras}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>  




                   
                    
                </Stack.Navigator>
           
               
            </NavigationContainer>
            
        </SafeAreaView>

    )
}

