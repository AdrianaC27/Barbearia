import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItem } from "@rneui/themed";
import React,{useState} from "react";
import{View,Text} from "react-native";
import { Button, TextInput } from "react-native-paper";

export default props=>{
    const [valor, setValor] = useState("");
        const product = [
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
    ];
    const Products = product.filter(product => product.id >= valor);
    
    return(
        <View style={{flex:1}}>
            <TextInput type="number"
            value={valor}
            placeholder="Filtrar"
            onChange={event => setValor(event.target.value)}></TextInput>

<ListItem>      
                <ListItemTitle>lista</ListItemTitle>  
                {Products.map(product=>(
                    <ListItemContent className='Card' key={product.id}>
                        <ListItemTitle>{product.id}</ListItemTitle>
                        <ListItemTitle>Preço:R${product.price}</ListItemTitle>
                    </ListItemContent>
                    

                ))}
    

            </ListItem>1

            <View>
            <Button>COMPRAR</Button>
            </View> 

        
        </View>
        
        
        )
        }