import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./components/Login";
import Profissional from "./components/Profissional";
import Tipos from "./components/Tipos"

const Drawer = createDrawerNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Login"
                    screenOptions={{
                        drawerActiveBackgroundColor:'#1679AB',
                        drawerActiveTintColor: '#C5FF95',
                        drawerPosition:'left'

                    }}>

                <Drawer.Screen name ='Login'component={Login} options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/> 
                <Drawer.Screen name ='Profissional' component={Profissional} options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>  
                <Drawer.Screen name ='Tipos'component={Tipos}options={{
                    headerTitle:'', 
                    headerStyle:{backgroundColor:"#C5FF95"},
                    headerTransparent: 100,
                }}/>    


                   
                    
                </Drawer.Navigator>
           
               
            </NavigationContainer>
            
        </SafeAreaView>

    )
}

