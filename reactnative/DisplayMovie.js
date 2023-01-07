import React from "react";
import {  Image,  TouchableHighlight, View , Text} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavoris,removeFavoris } from '../redux/actions/afavoris';


export const DisplayMovie =({datas,navigation,route})=>{
    const base_url='https://image.tmdb.org/t/p/w500/'
    const { favoris } = useSelector(state => state.favorisReducer);
    const dispatch = useDispatch();
    const actions = bindActionCreators({addFavoris,removeFavoris}, dispatch);

    if(datas){
        return(
            datas.map(data =>(
                <View key={datas.indexOf(data)} style={{flexDirection:'row',marginVertical:5,marginHorizontal:10, justifyContent:'center', shadowColor:'grey', borderWidth:1, borderColor:'grey', borderRadius:5, padding:7}}>
                <View style={{flex:3}}>
                    <Image  style={{height:60, width:50, margin:5}} source={{
                    uri: base_url+data.poster_path
                }}/>
                </View>
               <TouchableHighlight activeOpacity={0.6}
                underlayColor="white" onPress={()=>{navigation.navigate('DetailsScreen',{obj:data})}} style={{flexDirection:"column", flex:8}}>
                <View style={{flexDirection:"column"}} >
                        <Text style={{color:'black'}}>{data.title}</Text>
                        <Text style={{color:'grey', fontSize:12}} ellipsizeMode='tail' numberOfLines={3}>{data.overview}</Text>
                    </View>
                
               </TouchableHighlight>
                
                
                <View style={{flexDirection:'column',justifyContent:'flex-end', alignItems:'center', flex:2}}>
                    <Ionicons name={typeof favoris.find(element => element.id == data.id)!='undefined'?'heart':'heart-outline'} size={25} color={'tomato'}
                    onPress={()=>{
                        var Tfav=typeof favoris.find(element => element.id == data.id)!='undefined'? true:false;
                        console.log(favoris.indexOf(data))
                        if(!(Tfav)){
                            //SetfIcon('heart');
                            actions.addFavoris(data)
                        }
                        else{
                            //SetfIcon('heart-outline');
                            actions.removeFavoris(data.id)
                        }
                    }}/>
                    <Text style={{color:'tomato', fontSize:10}}>Note:{data.vote_average}</Text>
                </View>
            </View>
            )) 
        )
      
    }else {
        return(
            <View>
                <Text>Aucun resultat trouvé</Text>
            </View>
        )
    }
}