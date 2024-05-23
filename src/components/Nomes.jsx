import { ListItem } from "@rneui/base";
import React from "react";
import{View,Text} from "react-native";


export default props =>{
    
        const names = ['Joao', 'Eduardo', 'Tiago', 'Gabriel'];
    return(
        <View style={{flex:1}}>
            <ListItem>
            {names.map(name =>(
                <Text key={name}>{name}

                </Text>

            ))}

            </ListItem>
            


        </View>

    )
}