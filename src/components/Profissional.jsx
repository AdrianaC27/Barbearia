import React from "react";
import{View,Text, Image} from "react-native";
import { Card } from "@rneui/base";
import { CardDivider} from "@rneui/base/dist/Card/Card.Divider";

export default props =>{
    return(
        <View style ={{
            flex:1,
            backgroundColor:"#7EA1FF",
            marginTop:40   }}>               
            
            
            <Text style={{
                fontSize:18,
                fontFamily:'Arial',
                
            }}>Profissionais </Text>

<Card>
        <Card.Title>Profissional</Card.Title>
        <CardDivider/>
        <View style={{
          position:'relative', 
          alignItems: "center"
        }}>
            <Image style= {{ width: "100%", height: 100 }}
                    resizeMode="contain" 
                    source={require('../Imagens/pessoa.png')}/>
            <Text> Joao Alves</Text>


        </View>


    </Card>
            
            
            
           

        </View>
    )
}