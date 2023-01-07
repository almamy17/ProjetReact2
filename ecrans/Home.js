import React from "react";
import { Button, Text, View } from "react-native";
import { Request } from "../reactnative/request";

export const Home=({navigation, route})=>{
    return(
        
        <View style={{backgroundColor:'white', flex:1,}}>
            <Request navigation={navigation} route={route}/>
        </View>
    )
}