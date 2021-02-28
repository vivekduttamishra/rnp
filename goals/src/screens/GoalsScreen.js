import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import StyleInjector from '../components/StyleInjector';
import AppHeader from '../components/AppHeader';
import GoalInput from '../components/GoalInput';
import GoalList from '../components/GoalList';

const styles= StyleSheet.create({
    app:{
        margin:0,
        padding:0,
        alignItems: 'stretch',
    },
    container:{
        margin:15
       
    },
    childStyle:{
        margin:10
    },
    header:{
        backgroundColor:"red"
    }
});

const GoalsScreen= (props)=> {

    let [goals, setGoals]= React.useState([]);

    const addGoal=(goal)=> setGoals([...goals,goal]);

    const removeGoal=(selectedGoal)=>{
        setGoals(goals.filter(goal=> goal!==selectedGoal));
    }

    //Todo Init
    return (
        <View style={styles.app}>
            <AppHeader title="Goal Tracker" style={styles.header}/>
            <StyleInjector style={styles.container} childStyle={styles.childStyle}>
               <GoalInput onGoalInput={addGoal} />
               <GoalList goals={goals} onGoalLongPress={removeGoal} />
            </StyleInjector>
       </View>
    );
};

export default GoalsScreen;