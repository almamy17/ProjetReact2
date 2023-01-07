import React from 'react'
import { StyleSheet, View, } from 'react-native'

export const Boxes =(props)=>{
    return(
        <View style={styles.firstBox}>
            <View style={styles.unitBox}/>
            <View style={styles.unitBox}/>
            <View style={styles.unitBox}/>
            <View style={{flexDirection:"row"}}>
                <View style={styles.unitBox}/> 
                <View style={styles.unitBox}/>
                <View style={styles.unitBox}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstBox:{
        backgroundColor:'green',
        
        height:620,
        width:480,
    },
    unitBox:{
        backgroundColor: 'red',
        height:50,
        width:50,
        flex:1,
        margin: 5
    },
  
})