import React from 'react';
import {View,Text,Button,ScrollView,StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        margin:5
    }
});

const ForEach= ({data,render})=> {

    //Todo Init
    return (
        <>
        {data.map(item=> render(item))}
        </>
    );
};

export default ForEach;