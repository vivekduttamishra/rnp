import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Button,StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Context} from '../context/BlogContext';


const styles= StyleSheet.create({
    container:{
        margin:5,
        alignItems: 'center',
        justifyContent:"center",
        
        flex:1        
    },
    textInput:{
        borderWidth:1,
        flex:1,
        fontSize:40,
        paddingLeft:10,
        marginLeft:10

    },
    row:{
        flexDirection:'row',
        alignItems: 'center',
        padding:10
    },
    button:{
       
       backgroundColor:'black'
        
    },
    buttonText:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        
    },
    buttonIcon:{
        color:'white',
        fontSize:30,
        marginRight:10
    },
    key:{
        fontSize:40
    }
});

const LoginScreen= ({navigation})=> {
    //Todo Init
    let [key,setKey]=React.useState('');
    let {state,updateServerKey}=React.useContext(Context);
    
    const login=()=>{
        updateServerKey(key);
        console.log('serverkey',key);
        navigation.navigate('IndexScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <FontAwesome name="key" style={styles.key} color="black" />
                <TextInput style={styles.textInput} value={key} onChangeText={setKey} placeholder="server key" />    
            </View>
            <TouchableOpacity style={styles.button} onPress={login}>
            <View style={[styles.button,styles.row]}>                
                    <FontAwesome style={styles.buttonIcon} name="sign-in" size={24} color="black" />
                    <Text style={styles.buttonText}>Enter</Text>                
            </View>
            </TouchableOpacity>                
        </View>
    );
};

export default LoginScreen;