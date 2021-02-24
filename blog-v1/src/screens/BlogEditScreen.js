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
    },
    status:{
        marginTop:20,
        textAlign:"center",
        color:'gray',
        borderTopWidth:1
    }
});

const BlogEditScreen = ({ navigation }) => {
    //const id = navigation.state.params.id;
    const id = navigation.getParam('id');
    let { state, dispatch,updateBlog } = React.useContext(Context);

    React.useEffect(()=>{
        navigation.setParams({title:`Edit ${state.selectedBlog.title}`});
    },[state.selectedBlog.title])

    const onSave = blog => {
        //dispatch({ type: "update_post", payload: blog });
        //navigation.navigate("IndexScreen");
        updateBlog(blog, ()=>navigation.pop());

    };

    //Todo Init
    return (
        <View style={styles.container}>

            <BlogEditor
                blog={state.selectedBlog}
                onSubmit={onSave}
            />

            <Text style={styles.status}>
                {state.status}
            </Text>
        </View>
    );
};

BlogEditScreen.navigationOptions = ({navigation})=>{
    return {       
        title:navigation.getParam('title')
      };
};

export default BlogEditScreen;