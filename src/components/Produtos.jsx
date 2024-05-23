import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItem } from "@rneui/themed";
import React from "react";
import{View,Text} from "react-native";
import { Button } from "react-native-paper";

export default props=>{

    const products = [
        {
          id: 1,
          name: 'corte',
          price: 40.00
          
        },

        { id: 2,
            name: 'Escova',
            price: 50.00

        },

         {
            id: 3,
          name: 'Hidratação',
          price: 30.00
         },         
    ]
return(
<View style={{flex:1}}>
    <ListItem>
        <ListItemContent>
        {products.map(product => (
            <Text  key={product.id}>
                    {product.name}
            Preço: R${product.price}
            

            </Text>
     ))}  

        </ListItemContent>
       
     <View>
     <Button>Selecionar</Button>
        </View> 
     

    </ListItem>

</View>


)
}