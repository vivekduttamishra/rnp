import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        paddingTop:40,
        height:100,
        backgroundColor:'skyblue',
        alignSelf:'stretch',
        justifyContent: 'center'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'
        
        
    }
});

const AppHeader= ({style,title})=> {
    //Todo Init
    return (
        <View style={{...styles.container,...style}}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default AppHeader;