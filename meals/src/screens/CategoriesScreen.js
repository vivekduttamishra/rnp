import React from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import defaultStyles from '../styles/';
import {CATEGORIES} from '../data/dummyData';
import Colors from '../styles/colors';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderIconButton from '../components/HeaderIconButtons';



const CategoriesScreen= ({navigation})=> {
    //Todo Init

    const cellStyle=(color)=>{
            return {
                ...styles.shadow,
                ...styles.roundedBox,
                height:200,
                flex:1,
                margin:5,
                alignItems: 'flex-end',
                padding:10,
                
                justifyContent: 'flex-end',
                backgroundColor:color,
            }
    };


    
    

    return (
       <FlatList 
            data={CATEGORIES}
            numColumns={2}
            renderItem={({item})=> <TouchableOpacity
                                        onPress={()=>navigation.navigate('CategoryMealsScreen',{categoryId:item.id})}
                                     style={cellStyle(item.color)}>
                                       
                                            <Text style={styles.heading} numberOfLines={2}>{item.title}</Text>
                                        
                                    </TouchableOpacity>}
            keyGenerator={ item=>item.id }
       />
    );
};

CategoriesScreen.navigationOptions =({navigation})=>{

    console.log('headerStyle.backgroundColor',styles.headerStyle.backgroundColor);

    return {
        headerTitle: 'Meal Categories',
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
} 

const styles= StyleSheet.create({
    ...defaultStyles,
    cell:{
        height:200,

    },
    heading:{
        ...defaultStyles.heading,
        fontSize:30,
        textAlign:'right'
    }
});

export default CategoriesScreen;