import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

import rootStyles from '../styles';

const MealListItem = ({ navigation, meal, onSelect }) => {
    //Todo Init
    return (
        <View style={styles.listItem}>
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => onSelect(meal)}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            style={styles.bgImage}
                            source={{ uri: meal.imageUrl }} >
                            <View style={styles.listTitleContainer}>
                                <Text numberOfLines={2} style={styles.listTitle}>{meal.title}</Text>
                            </View>
                            
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <Text style={styles.smallText}>{meal.duration}m</Text>
                        <Text style={styles.smallText}>{meal.complexity.toUpperCase()}</Text>
                        <Text style={styles.smallText}>{meal.affordability.toUpperCase()}</Text>
                    </View>
                </View>

            </TouchableOpacity>

        </View>
    );
};


const styles = StyleSheet.create({
    ...rootStyles,
    listItem: {
        ...rootStyles.card,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        height: 200,
        overflow: 'hidden',
        backgroundColor:'#f5f5f5'

    },
    listTitleContainer:{
        backgroundColor:'black',
        opacity: 0.7
    },
    listTitle: {
        
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        
        fontSize: 20

    },
    smallText: {
        //color:'#f5f5f5'

    },
    mealRow: {
        flexDirection: 'row',
        overflow: 'hidden'
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end'
    },
    mealHeader: {
        height: '85%',
        overflow: 'hidden'
    },
    mealDetails: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height:"15%",
        paddingHorizontal:10
    }

});
export default MealListItem;