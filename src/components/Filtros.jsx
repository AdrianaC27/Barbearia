
import { ListItem } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { TextInput } from "react-native";

export default props =>{
    
    const pessoas = [
        {
            nome: 'João',
            idade: 15
          },

          {
            nome:'Eduardo',
            idade:20
          },

          {
            nome:'Tiago',
            idade:17
          },

          {
            nome:'Gabriel',
            idade:25
          },
    ]
    const maiores = pessoas.filter(pessoa => pessoa.idade >= 18);

    return (
        <View style ={{flex:1}}>  

            <ListItem>      
                <ListItemTitle>Maiores de 18 anos</ListItemTitle>  
                {maiores.map(pessoa=>(
                    <ListItemContent className='item ' key={pessoa.nome}>
                        <ListItemTitle>{pessoa.nome}</ListItemTitle>
                        <ListItemTitle>Idade:{pessoa.idade}</ListItemTitle>
                    </ListItemContent>
                    

                ))}
    

            </ListItem>


           
            
        </View>
    )
}