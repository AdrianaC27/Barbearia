import{View,Text, Image} from "react-native";
import { Card } from "@rneui/base";
import { CardDivider} from "@rneui/base/dist/Card/Card.Divider";

export default props =>{
    return(
        <View style ={{
            flex:1,
            backgroundColor:"#5DEBD7",       
            marginTop:40 }}>               
            
            
            <Text style={{
                fontSize:18,
                fontFamily:'Arial',
                
            }}>Tipos de Cortes </Text>

<Card>
        <Card.Title>Cabelos curtos</Card.Title>
        <CardDivider/>
        <View style={{
          position:'relative', 
          alignItems: "center"
        }}>
            <Image style= {{ width: "100%", height: 100 }}
                    resizeMode="contain" 
                    source={require('../Imagens/CabeloCurto.png')}/>
            <Text> Joao Alves</Text>


        </View>


    </Card>
            
            
            
           

        </View>
    )
}