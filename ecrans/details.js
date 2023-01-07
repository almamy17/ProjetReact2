import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import myAxios from 'axios';
import { Text, View, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListMovie } from "../reactnative/listMovie";

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavoris,removeFavoris } from '../redux/actions/afavoris';



export const DetailsScreen=(props)=>{
    const base_url='https://image.tmdb.org/t/p/w500/'
    const route=useRoute()
    const navigation=useNavigation()
    //const [fIcon,SetfIcon]=useState('heart-outline')
    
    //filtrage du détails
    const details= route.params.obj
    const dtitle= details.title==null? "indisponible": details.title
    const dposter= details.poster_path==null? "indisponible": details.poster_path
    const dlang= details.original_language==null? "indisponible": details.original_language
    const doverview= details.overview==null? "indisponible": details.overview
    const drel_date= details.release_date==null? "indisponible": details.release_date

    const { favoris } = useSelector(state => state.favorisReducer);
    const dispatch = useDispatch();
    const actions = bindActionCreators({addFavoris,removeFavoris}, dispatch);

    //const [Tfav,SetTfav]=useState(favoris.includes(details))
    
    return(
        
        <View style={{backgroundColor:'white', flex:1, alignContent:'center', }}>
            <View style={{marginHorizontal:20, marginVertical:50}}>
            <View style={{alignItems:'center'}}>
                <Image  style={{height:200, width:200, margin:5}} source={{
                uri:base_url+dposter
                }}/>
                <Ionicons name={favoris.includes(details)?'heart':'heart-outline'} size={30} color={'tomato'} 
                onPress={()=>{
                    var Tfav=favoris.includes(details)
                    
                    if(!(Tfav)){
                        //SetfIcon('heart');
                        actions.addFavoris(details)
                    }
                    else{
                        //SetfIcon('heart-outline');
                        actions.removeFavoris(favoris.indexOf(details))
                    };
                    //console.log(Tfav)               
                }} />
            </View>
                <View style={{marginStart:10}}>
                <View style={{flexDirection:'row'}}><Ionicons name={'square'} size={15} color={'orange'}/><Text style={{fontWeight:"bold"}}>Titre : </Text><Text>{dtitle}</Text></View>
                <View style={{flexDirection:'row'}}><Ionicons name={'square'} size={15} color={'orange'}/><Text style={{fontWeight:"bold"}}>Langue : </Text><Text>{(dlang).toUpperCase()}</Text></View>
                <View style={{flexDirection:'row'}}><Ionicons name={'square'} size={15} color={'orange'} /><Text style={{fontWeight:"bold"}}>Date de sortie : </Text><Text>{drel_date}</Text></View>
                <View style={{flexDirection:'row', marginTop:5,marginStart:20}}><Text style={{width:300}}><Text style={{fontWeight:"bold", color:"orange"}}>Synopsis et détails : </Text><Text >{doverview}</Text></Text></View>
            </View>
            </View>
        </View>
    )
}