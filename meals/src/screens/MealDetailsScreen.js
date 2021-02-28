import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import defaultStyles from '../styles';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderIconButton from '../components/HeaderIconButtons';



const MealDetailsScreen= ({navigation})=> {

    let meal= navigation.getParam('meal');
    //Todo Init
    return (
        <View style={styles.container2}>
            <Text style={styles.title}>{meal.title}</Text>
            <Button title="Back to Meals"  onPress={()=>navigation.goBack()} />
            <Button title="Back to Categories"  onPress={()=>navigation.popToTop()} />
        </View>
    );
};


MealDetailsScreen.navigationOptions = ({navigation})=>{

    let meal=navigation.getParam('meal');
    return {
        headerTitle: meal.title,
        headerRight:(
            <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item 
                    title='*'
                    iconName='ios-star'
                    onPress={()=>console.log('favorites',meal.title)}
                />
            </HeaderButtons>
        )
    }
};


const styles= StyleSheet.create({
   ...defaultStyles,
   title:{
       ...defaultStyles.title,
       textAlign: 'center'
   }
});
export default MealDetailsScreen;