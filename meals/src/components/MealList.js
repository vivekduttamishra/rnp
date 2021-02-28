import React from 'react';
import {View,Text,FlatList,Button,StyleSheet} from 'react-native';
import defaultStyles from '../styles';
import MealListItem from './MealListItem';

const MealList= ({navigation,meals})=> {
    //Todo Init
    return (
        <View style={styles.container}>
             <FlatList data={meals} style={styles.listStyle}
                    renderItem={({ item }) => <MealListItem meal={item} onSelect={meal=>navigation.navigate('MealDetailsScreen',{meal})} />}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    ...defaultStyles,
    listStyle: {
        width: "100%"
    }
});
export default MealList;