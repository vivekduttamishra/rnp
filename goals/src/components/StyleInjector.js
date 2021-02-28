import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        margin:5
    }
});

const StyleInjector= ({style,childStyle,children})=> {
    //Todo Init
    let id=0;
    
    const renderChild=(child)=>(
        <View style={childStyle}>{child}</View>
    );
    
    return (
        <View style={style}>
           {children.length
                ?children.map(renderChild)
                :renderChild(children)
            }
        </View>
    );
};

//console.log('StyledInjector',StyleInjector);


export default StyleInjector;