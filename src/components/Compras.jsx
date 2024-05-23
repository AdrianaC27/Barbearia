import { ListItem } from "@rneui/base";
import React,{useEffect,useState} from "react";
import{View,Text, Pressable} from "react-native";

export default  props=>{
    const[cart, setCard]=useState([]);
    const[total,setTotal]= useState(0);

    useEffect(() =>{
    const Total = cart.reduce((accumulator,currentValue)=> 
    accumulator + currentValue.price * currentValue.quantity,0);

    setTotal(Total);    

    },[cart]
    );

    const handleAddToCart =(item, quantity) =>{
        const newCart =[ ...cart];
        const existingIndex = newCart.findIndex(i.id === item.id);

        if(existingIndex === -1){
            setCard([...newCart,{...item,quantity}]);
        } 
        else{newCart[existingIndex].quantity += quantity;
        setCart(newCart);
    }
    };

    const handleRemoveFromCart = index => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
      };



    return(
        <View>
            
            <Text>Carrinho de compras</Text>
            <View>
                {cart.map((item, index) => (
                    <Pressable key={item.id}>
                        <Text role="img" aria-label={item.name}>{item.emoji}
                            {item.name} ({'RS$'} {item.price} x {item.quantity}) = RS$
                            {item.price * item.quantity}
                        </Text>
 
                        <Button textColor="white" onPress={() => handleRemoveFromCart(index)} style={{
                            backgroundColor: 'red',
                            width: 200,
                            marginTop: 6
                        }}>Remover</Button>
                    </Pressable>
                ))}
 
            </View>

            <Text>Total: {'R$'} {total}</Text>
            <button onClick={() => handleAddToCart({ id: 1, name: 'Banana', price: 1.5, emoji: '🍌' }, 1)}>
                        Adicionar 1 🍌 (R$ 1,5)
            </button>
                       

            
        </View>
    )

}