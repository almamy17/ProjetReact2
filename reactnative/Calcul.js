import React, { useState } from 'react';
import {StyleSheet,View, TextInput,Text} from 'react-native'

export const Calculatrice =()=>{
    const [val,setVal]=useState({
        inputext:'',
        result:0

    })
    return(
        
        <View style={{margin:50, alignContent:'center', width:280, height:340}} >
            <View style={{ flexDirection:'row',borderWidth:3, borderRadius:3, borderColor:'grey', padding:3}}>
                <TextInput style={{flex:1,backgroundColor:'red'}}/>
            </View>
            <View style={{flex:1,flexDirection:'row', }}>
                <View style={{flex:1,flexDirection:'column', marginRight:10}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={syles.box}><Boutton valeur="7"/></View>
                        <View style={syles.box}><Boutton valeur="8"/></View>
                        <View style={syles.box}><Boutton valeur="9"/></View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={syles.box}><Boutton valeur="4"/></View>
                        <View style={syles.box}><Boutton valeur="5"/></View>
                        <View style={syles.box}><Boutton valeur="6"/></View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={syles.box}><Boutton valeur="1"/></View>
                        <View style={syles.box}><Boutton valeur="2"/></View>
                        <View style={syles.box}><Boutton valeur="3"/></View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={[syles.box,syles.box_tall]}><Boutton valeur="0" /></View>
                        <View style={syles.box}><Boutton valeur="." /></View>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row', alignItems:'flex-end' }}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={[syles.box,syles.box_blue]}><Boutton valeur="CE" /></View>
                        <View style={syles.box}><Boutton valeur="/"/></View>
                        <View style={syles.box}><Boutton valeur="-"/></View>
                        <View style={[syles.box,syles.box_yellow]}><Boutton valeur="=" /></View>
                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={[syles.box,syles.box_red]}><Boutton valeur="C" /></View>
                        <View style={syles.box}><Boutton valeur="*" /></View>
                        <View style={[syles.box,syles.box_green]}><Boutton valeur="+" /></View>
                    </View>
                </View>
           
            </View>
            <View>
                <View style={syles.box_alone}>
                    <Boutton  valeur="Séparer miliers*"/>
                </View >
                
            </View>
            
        </View>
    )
}

export const Boutton =(props)=>{
    
    return(
        <View >
            <Text style={{textAlign:'center'}}>{props.valeur}</Text>
        </View>
    )
}

const syles= StyleSheet.create({
    box:{
        flex:1,
        borderColor:'grey',
        borderWidth:2,
        borderRadius:3, 
        margin:3,
        padding:3
    },
    box_green:{
        flex:2 , backgroundColor:'green'
    },
    box_yellow:{
        flex:1, backgroundColor:'yellow'
    },
    box_blue:{
        flex:1, backgroundColor:'blue'
    },
    box_red:{
        flex:1, backgroundColor:'red'
    },
    box_tall:{
        flex:2,},
    box_alone:{
        borderColor:'grey',
        borderWidth:2,
        borderRadius:3, 
        margin:3,
        padding:3
    }
})