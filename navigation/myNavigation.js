import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../ecrans/Home";
import { Favoris } from "../ecrans/favoris";
import { DetailsScreen } from "../ecrans/details";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const stackHome= createNativeStackNavigator()
const HomeScreen=(props)=>{
    return(
        <stackHome.Navigator initialRouteName="Home" >
            <stackHome.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <stackHome.Screen name="DetailsScreen" component={DetailsScreen} options={{headerTitle:'Détails',headerTitleAlign:'center',
        headerTitleStyle:{fontSize:25, fontWeight:'bold'},
        headerShadowVisible:false,}}/>
        </stackHome.Navigator>
    )
}
const stackFavoris= createNativeStackNavigator()
const FavorisScreen=(props)=>{
  return(
      <stackFavoris.Navigator initialRouteName="Home" >
          <stackFavoris.Screen name="Favoris" component={Favoris} options={{title:"Liste des films favoris",
        headerTitleAlign:'center',
        headerTitleStyle:{fontSize:25, fontWeight:'bold'},
        headerShadowVisible:false,
        }}/>
          <stackFavoris.Screen name="DetailsScreen" component={DetailsScreen} options={{headerTitle:'Détails',headerTitleAlign:'center',
        headerTitleStyle:{fontSize:25, fontWeight:'bold'},
        headerShadowVisible:false,}}/>
      </stackFavoris.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export const MyNavigation=()=>{
    return(
        
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                // color='orange';
                 size=30;
              if (route.name === 'Accueil') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Films favoris') {
                iconName = focused ? 'heart-circle' : 'heart-circle-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Accueil" component={HomeScreen} options={{headerShown:false}} />
          <Tab.Screen name="Films favoris" component={FavorisScreen}options={{headerShown:false}} />
          
        </Tab.Navigator>
      
    )
}