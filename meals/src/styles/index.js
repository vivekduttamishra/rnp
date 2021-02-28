import {StyleSheet,Platform} from 'react-native';
import Colors from './colors';

export default StyleSheet.create({

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'Telivigala'
    },

    tileText:{
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'ReggaeOne'
    },

    bodyText:{
        fontSize:14,
        fontFamily:'Oswald'
    },
    tags:{
        fontFamily: 'Raleway'
    },
    emphasize:{
        fontFamily:'Kanadaka'
    },
    highlight:{
        backgroundColor: 'lightyellow'
    },
    heading:{
        fontFamily:'Telivigala',
        fontSize:25
    },
    headerStyle:{
        backgroundColor: Platform.OS==='android' ? Colors.primary : 'white'
    },
    shadow:{
        shadowColor:'black',
        shadowOpacity:.24,
        shadowRadius:10,
        shadowOffset:{width:0,height:2},
        elevation:3
    },
    roundedBox:{
        borderRadius:10
    },
    card:{
        shadowColor:'black',
        shadowOpacity:.24,
        shadowRadius:10,
        shadowOffset:{width:0,height:2},
        elevation:3,
        borderRadius:10,
        minHeight:100,
        margin:5,
        padding:5,
        backgroundColor:'#EEE'
        
    }

    
});
