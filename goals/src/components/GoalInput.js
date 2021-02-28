import React from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        
        borderColor:'blue',
        //borderWidth:4,
        flex: 1,
        justifyContent: 'center'
    },
    dialog: {
        borderColor:'gray',
        borderWidth:1,
        borderRadius:15,
        margin: 5,
        //flexDirection: 'row',
        //flex: 1,
        //marginTop: 100,
        height: "20%",
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:0, height:20},
        shadowOpacity:0.25,
        shadowRadius:10,
        
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    goalText: {
        borderBottomWidth: 1,
        // flex: 1,
        margin: 10,
        fontSize: 20,
        paddingHorizontal: 5
    },
    label: {
        marginRight: 10,
        textAlign: 'center',
        fontSize: 25
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modal: {
        marginTop: "10%",
        borderWidth: 1,
        backgroundColor: 'gray',
        height: 200
    }
});

const GoalInput = ({ onGoalInput }) => {
    let [goal, setGoal] = React.useState('')
    let [modal, setModal] = React.useState(false);



    const onPress = () => {
        if (!goal)
            return;
        onGoalInput(goal);
        setGoal('');
        setModal(false);
    };
    const onCancel = () => {
        setGoal('');
        setModal(false);
    };

    //Todo Init
    return (
        <View>
            <Button title="Add Goal" onPress={() => setModal(true)} />
            <Modal style={styles.modal}
                visible={modal} transparent
                animationType="slide" >
                <View style={styles.container} >
                    <View style={styles.dialog}>

                        <Text style={styles.label}>Goals</Text>
                        <TextInput
                            style={styles.goalText}
                            value={goal}
                            placeholder='Whats your goal?'
                            onChangeText={setGoal}
                            onEndEditing={onPress}
                        />
                        <View style={styles.buttons}>
                            <Button title="Add" onPress={onPress} />
                            <Button title="Cancel" onPress={onCancel} />
                        </View>
                    </View>
                </View>

            </Modal>

        </View>

    );
};

export default GoalInput;