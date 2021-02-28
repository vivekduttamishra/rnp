import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import defaultStyles from '../styles';
import { CATEGORIES, MEALS } from '../data/dummyData';
import MealList from '../components/MealList';


const CategoryMealsScreen = ({ navigation }) => {
    let id = navigation.getParam('categoryId');
    let [category, setCategory] = React.useState(null);
    let [meals, setMeals] = React.useState([]);

    React.useEffect(() => {
        console.log('id', id);
        console.log('category', category);

        setTimeout(() => {
            let category = CATEGORIES.find(c => c.id === id);
            setCategory(category);
            let _meals = MEALS.filter(m => m.categoryIds.indexOf(id) >= 0);
            setMeals(_meals);
            navigation.setParams({ category });
        }, 2000)


    }, []);

    if (!category) {
        return <View style={styles.container}>
            <Text>loading details for {id}</Text>
        </View>
    }
    //Todo Init
    return (
        <View style={{ ...styles.container, backgroundColor: category.color }}>
            <MealList
                meals={meals}
                navigation={navigation} />


        </View>
    );
};

CategoryMealsScreen.navigationOptions = (opt) => {

    let category = opt.navigation.getParam('category');

    if (!category)
        return {};
    else
        return {
            headerTitle: category.title,
            headerStyle: { backgroundColor: category.color }
        };
}

const styles = StyleSheet.create({
    ...defaultStyles,
    listStyle: {
        width: "100%"
    }
});

export default CategoryMealsScreen;