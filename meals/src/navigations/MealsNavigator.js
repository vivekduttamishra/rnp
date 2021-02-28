import React from 'react';
import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from'../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../styles/colors';
import defaultStyles from '../styles';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';


let stackNavOptions={
    defaultNavigationOptions:{
        headerStyle: defaultStyles.headerStyle,
        headerTintColor: Colors.headerTint

    }
};


let MealsNavigator= createStackNavigator({
    CategoriesScreen:{
        screen: CategoriesScreen,
        headerTitle: 'Categories'
        
    },
    CategoryMealsScreen:CategoryMealsScreen,
    MealDetailsScreen
}, stackNavOptions);


let FavoriteNavigator=createStackNavigator({
    FavoritesScreen, 
    MealDetailsScreen
},stackNavOptions);






let tabConfig={
    Discover: {
        screen:MealsNavigator,
        navigationOptions: {
            tabBarLabel:'Discover Receipies',
            tabBarIcon: (tabInfo)=>(
                <Ionicons name="ios-restaurant-outline" size={25} color={tabInfo.tintColor} />
            ),
            tabBarColor:Colors.tab1
        }
    },
    Favorites: {
        screen:FavoriteNavigator,
        navigationOptions: {
            tabBarLabel: "Your Favorites!",
            tabBarColor: Colors.tab2,
            tabBarIcon: (tabInfo)=>(
                <Ionicons name="ios-star-outline" size={25} color={tabInfo.tintColor} />
            )
        }
    }
};

let appTabs=null;

if(Platform.OS === "android"){
    appTabs = createMaterialBottomTabNavigator(tabConfig,{
        activeColor:Colors.tabTextColor,
        shifting:true,
        barStyle:{
            backgroundColor:Colors.primary
        }
    });
} else{
    appTabs=createBottomTabNavigator(tabConfig,{
        tabBarOptions:{
            activeTintColor: Colors.accent
        }
    });
}


const appNavigator= createDrawerNavigator({

    Meals:{
        screen:appTabs
    }, 

    Filters: createStackNavigator({FiltersScreen},stackNavOptions)

})





export default createAppContainer(appNavigator);


