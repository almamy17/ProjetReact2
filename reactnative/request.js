import React, { useState } from "react";
//import myAxios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Button, FlatList, Image, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { DisplayMovie } from "./DisplayMovie";
import myAxios from "../my-axios";

export const Request=({navigation,route})=>{
    const base_url='https://image.tmdb.org/t/p/w500/'
    const [loadingAxios, SetLoadingAxios] = useState(false);
    const [datasAxios, SetDatasAxios] = useState(null);
    const [searchMovie,onChangeSearch]=useState('')

    
    


    const getDatasWithAxios =()=>{

        SetLoadingAxios(true)
        myAxios.get('https://api.themoviedb.org/3/search/movie?api_key=a8a68385432634fd5d90a12aa242519b&query='+searchMovie+'&language=fr-FR&page=1&include_adult=false')
            .then(response=>{
                if(response.data){
                    if(response.data.results.length>0){
                        SetDatasAxios(response.data.results)
                        //console.log(typeof(response.data.results))
                        SetLoadingAxios(false);
                    }
                    else{
                        SetLoadingAxios(false); 
                    }
                }
                
            }).catch(err=>{
                SetDatasAxios(err.toString());
                SetLoadingAxios(false);
            }
            )
        
    }
        
    return(
        <View style={{marginTop:50, marginBottom:100 ,marginHorizontal:15}}>
            <View style={{flexDirection:'row'}}>
            <TextInput
                style={{
                    height: 40,
                    marginVertical: 15,
                    marginHorizontal:15,
                    borderWidth: 1,
                    borderRadius:7,
                    padding: 10,
                    flex:3,
                  }}
                onChangeText={onChangeSearch}
                value= {searchMovie}
                placeholder={searchMovie}
            />
            
            <Ionicons name={"search"} size={30} color={"tomato"} style={{marginVertical:17, flex:1,}}  onPress={()=>{
                if(searchMovie!=''){
                getDatasWithAxios();}}} />
            </View>
            <Text>
                Résultat de '{searchMovie}' :
            </Text>
            <ScrollView>
            {loadingAxios ? <ActivityIndicator size="large" color="tomato" /> :    
            <DisplayMovie datas={datasAxios}  navigation={navigation} route={route}/>}
            </ScrollView>
        </View>
    )
}
