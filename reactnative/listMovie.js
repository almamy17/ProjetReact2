import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";

const DATA=[
    {
        title:'Movie 1',
        description: "Pour enrayer la criminalité à Detroit, deux projets sont en concurrence : Dick Jones a créé une machine guerrière très sophistiquée, tandis que Leon Nash, un arriviste, a conçu Robocop, une créature mi-homme mi-robot. C'est ce deuxième qui l'emporte, et Alex Murphy, un jeune policier assassiné par des bandits, est utilisé pour devenir Robocop. Il nettoie la ville et tue Jones qui avait fait abattre Leon.",
        like:7,
    },
    {
        title:'Movie 2',
        description: "Pour enrayer la criminalité à Detroit, deux projets sont en concurrence : Dick Jones a créé une machine guerrière très sophistiquée, tandis que Leon Nash, un arriviste, a conçu Robocop, une créature mi-homme mi-robot. C'est ce deuxième qui l'emporte, et Alex Murphy, un jeune policier assassiné par des bandits, est utilisé pour devenir Robocop. Il nettoie la ville et tue Jones qui avait fait abattre Leon.",
        like:20,
    },
    {
        title:'Movie 3',
        description: "Pour enrayer la criminalité à Detroit, deux projets sont en concurrence : Dick Jones a créé une machine guerrière très sophistiquée, tandis que Leon Nash, un arriviste, a conçu Robocop, une créature mi-homme mi-robot. C'est ce deuxième qui l'emporte, et Alex Murphy, un jeune policier assassiné par des bandits, est utilisé pour devenir Robocop. Il nettoie la ville et tue Jones qui avait fait abattre Leon.",
        like:4,
    },
]

const Item=({title,description,like})=>(
    <View style={{flexDirection:'row',borderColor: 'black',
    borderWidth: 2, justifyContent:'center'}}>
        <View>
            <Image  style={styles.image} source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRn8Pyl4DQyCd8SXqcBcslX93K_WK3x5-xkZT4692EUC9KTI8bU',
          }}/>
        </View>
        <View style={{flexDirection:"column"}}>
            <Text syle={{color:'black'}}>{title}</Text>
            <Text syle={{color:'grey'}} numberOfLines={4} >{description}</Text>
        </View>
        <View style={{justifyContent:'flex-end'}}>
            <Text syle={{color:'red'}}>{like}</Text>
        </View>
    </View>
)

export const ListMovie=()=>{
    const RenderItem=({item})=>(
        <Item title={item.title} description={item.description} like={item.like}/> 
    )
    return(
        <View style={{flex:1}}>
            <FlatList
                data={DATA}
                renderItem={RenderItem}
                keyExtractor={item=>item.id}

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