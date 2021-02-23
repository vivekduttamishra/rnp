import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogEditor from '../components/BlogEditor';

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        paddingBottom: 10,
    },
    body: {
        fontSize: 18
    },
    editor: {
        marginTop: 10,
        borderTopWidth: 5,
        paddingTop: 20
    }
});

const BlogDetailsScreen = ({ navigation }) => {
    //const id = navigation.state.params.id;
    const id = navigation.getParam('id');
    let { state, dispatch } = React.useContext(Context);

    const onSave = blog => {
        dispatch({ type: "update_post", payload: blog });
        navigation.navigate("IndexScreen");
    };

    //Todo Init
    return (
        <View style={styles.container}>

            <BlogEditor
                blog={state.selectedBlog}
                onSubmit={onSave}
            />


        </View>
    );
};

export default BlogDetailsScreen;