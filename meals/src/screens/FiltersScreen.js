import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderIconButton from '../components/HeaderIconButtons';


const FiltersScreen= (props)=> {
    //Todo Init
    return (
        <View style={styles.container}>
            <Text>Filters Screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation})=>{

    return {
        headerTitle:'Meal Filters',
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
export default FiltersScreen;