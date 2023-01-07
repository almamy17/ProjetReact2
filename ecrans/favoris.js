import React from 'react';
import { View, Text,  StyleSheet, ScrollView,  Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFavoris } from '../redux/actions/afavoris';

export const Favoris = ({ navigation, route }) => {

    const {favoris}  = useSelector(state => state.favorisReducer);
    const dispatch = useDispatch();
    const base_url='https://image.tmdb.org/t/p/w500/'
    const actions = bindActionCreators({removeFavoris}, dispatch);
    
    const RenderFavoris = ({favori,navi,rou}) => {
        var index;
      if(favori.length!=0){
          return(
              favori.map(data =>(
                index=favori.indexOf(data),
                  <View key={index} style={{flexDirection:'row',marginVertical:5,marginHorizontal:5, justifyContent:'center', shadowColor:'grey', borderWidth:1, borderColor:'grey', borderRadius:5, padding:2}}>
                  <View>
                      <Image  style={{height:60, width:50, margin:5}} source={{
                      uri: base_url+data.poster_path
                  }}/>
                  </View>
                 <TouchableHighlight activeOpacity={0.6} underlayColor="white" onPress={()=>{navigation.navigate('DetailsScreen',{obj:data})}}>
                  <View style={{flexDirection:"column", width:210}} >
                          <Text style={{color:'black'}}>{data.title}</Text>
                          <Text style={{color:'grey', fontSize:12}} ellipsizeMode='tail' numberOfLines={3}>{data.overview}</Text>
                      </View>
                 </TouchableHighlight >                  
                  <View style={{justifyContent:'flex-end'}}>
                      <Text style={{color:'tomato', fontSize:10}}>Note:{data.vote_average}</Text>
                  </View>
                  <View  style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        }}>
                  <TouchableOpacity
                        onPress={() => actions.removeFavoris(data.id)}>
                        <Ionicons name={'close-circle'} color={'red'} size={30}  />
                    </TouchableOpacity>
                  </View>
              </View>
              )) 
          )
    }else{
      return(
        <View style={{justifyContent:'center', alignItems:'center',flex:1,backgroundColor:'white' }}>
          <Text style={{fontSize:20}}>Liste vide!!</Text>
        </View>
      )
    }}

    return (
        <View style={{backgroundColor:'white',flex:1,padding: 20}}>
            <ScrollView>
                <View style={{ alignItems:'center' }}>
                    
                    <RenderFavoris favori={favoris} navi={navigation} rou={route}/>
                </View>
            </ScrollView>
        </View>
    );
}



