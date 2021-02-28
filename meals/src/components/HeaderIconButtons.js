import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';
import Colors from '../styles/colors';


const HeaderIconButtons= (props)=> {
    //Todo Init
    return (
        <HeaderButton {...props} 
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS==='android' ? 'white' : Colors.primary}
        />
    );
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'///
    }
});
export default HeaderIconButtons;