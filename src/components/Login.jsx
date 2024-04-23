import React from "react";
import{View,Text,Image, Pressable} from "react-native";
import { Button } from "react-native-paper";

export default props =>{
    return(
        <View style ={{
            flex:1,
            backgroundColor:"#7EA1F7"  }}>
                
            <Pressable style={{
                alignItems:'center',
                justifyContent:'center',
                marginTop:70
            }}>
            <Image style={{
               width: "40%", 
               height: 40,
               padding: 100,
               

            }} source={require('../Imagens/tesoura.png')}/>

            </Pressable>

            
            <Text style={{
                fontSize:30,
                fontFamily:'Arial',
                fontWeight: 'bold',
                textAlign:'center',
                marginTop:35
                
                
                
                
                    }}>Cortes </Text>
            <Text style={{
                fontSize:24,
                fontFamily:'Arial',
                fontWeight: 'bold',
                textAlign:'center',
                marginTop:35,
                color:'white'
              

                    }} >Faça seu Corte Aqui!!!</Text>
                
            <View style={{
               fontSize:24,
               fontFamily:'Arial',
               
               
            }}>
                <Button style={{
                    backgroundColor:'#F4538A',
                    margin:20,
                    
                    
                }}onPress={()=> props.navigation.navigate('Tipos')} textColor="white" >
                    TIPOS   

                </Button>

                <Button style={{
                    backgroundColor:'#F4538A',
                    margin:20
                }}onPress={()=> props.navigation.navigate('Profissional')} textColor="white">
                    PROFISSIONAL        

                </Button>
                    
            </View>

            <View>


                    <Button style={{
                        textAlign:'center',
                        marginTop:35 
                    }}
                    title="Profissional"
                    onPress={()=> props.navigation.navigate('Profissional')}    
            />
            </View>
            
           

        </View>
    )
}