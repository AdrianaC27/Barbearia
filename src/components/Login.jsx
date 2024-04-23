import React from "react";
import{View,Text,Image,Button, Pressable} from "react-native";

export default props =>{
    return(
        <View style ={{
            flex:1,
            backgroundColor:"#5DEBD7"  }}>
                
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
                fontSize:24,
                fontFamily:'Arial',
                textAlign:'center',
                marginTop:35
                
                
                
                
                    }}>Cortes </Text>
            <Text style={{
                fontSize:24,
                fontFamily:'Arial',

                    }} >Faça seu Corte Aqui!!!</Text>
                
            <View style={{
               fontSize:24,
               fontFamily:'Arial',
               
            }}>
                    <Button 
                         title="Tipos"
                        onPress={()=> props.navigation.navigate('Tipos')}    
                    />                       
                        
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