import React from 'react';
import {View,Text,Button,FlatList,TouchableOpacity,StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        margin:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem:{
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    text: {
        fontSize: 16,
        marginVertical:10,
    }
});

const GoalList= ({goals,onGoalLongPress})=> {
    //Todo Init
    if(!goals || !goals.length) 
        return  (
            <View style={styles.container}>
                <Text>No Goals Set Yet!</Text>
                <Text>Time to think about one!</Text>
            </View>
        ) 
    return (
        <FlatList 
            data={goals}
            keyExtractor={goal=>goal.toLowerCase()}
            renderItem = {({item})=>(
                <TouchableOpacity onLongPress={()=>onGoalLongPress(item)} >
                    <View style={styles.listItem}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                </TouchableOpacity>
                

            )}
        />
    );
};

export default GoalList;