import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import {MEALS} from '../data/dummyData';
import MealList from '../components/MealList';
import Meal from '../models/meal';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderIconButton from '../components/HeaderIconButtons';

const FavoritesScreen= ({navigation})=> {

    let favoriteMealId=['m3','m7','m8','m4']
    let favoriteMeals= MEALS.filter(m=> favoriteMealId.indexOf(m.id)>=0);
    //Todo Init
    return (
        <View style={styles.container}>
            <MealList meals={favoriteMeals} navigation={navigation}/>
        </View>
    );
};

FavoritesScreen.navigationOptions = ({navigation})=>{

    return {
        headerTitle:'Your Favorites!',
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item 
                        title="drawer" 
                        iconName="ios-menu"  
                        onPress={()=>navigation.toggleDrawer()}    
                    />
            </HeaderButtons>
        )
    };
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default FavoritesScreen;