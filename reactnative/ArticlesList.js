import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";

const DATA=[
    {
        name:'Article 1',
        price: 1500,
        like:7,
    },
    {
        name:'Article 2',
        price: 1800,
        like:20,
    },
    {
        name:'Article 3',
        price: 750,
        like:4,
    },
]

const Item=({name,price,like})=>(
    <View style={{flexDirection:'row',borderColor: 'black',
    borderWidth: 2, justifyContent:'center'}}>
        <View>
            <Image  style={styles.image} source={{
            uri: 'https://ci.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/89/105991/1.jpg?5014',
          }}/>
        </View>
        <View style={{flexDirection:"column"}}>
            <Text syle={{color:'black'}}>{name}</Text>
            <Text syle={{color:'grey'}}>{price}</Text>
        </View>
        <View style={{justifyContent:'flex-end'}}>
            <Text syle={{color:'red'}}>{like}</Text>
        </View>
    </View>
)

export const ArticleList=()=>{
    const RenderItem=({item})=>(
        <Item name={item.name} price={item.price} like={item.like}/> 
    )
    return(
        <View style={{flex:1}}>
            <FlatList
                data={DATA}
                renderItem={RenderItem}
                keyExtractor={item=>item.name}

            />
        </View>
    );
}
const styles=StyleSheet.create({
    image:{
        width:60,
        height:60
    },

})