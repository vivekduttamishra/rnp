import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogEditor from '../components/BlogEditor';
const styles= StyleSheet.create({
    container:{
        margin:5
    },
    title:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    }
});

const BlogAddScreen= ({navigation})=> {
    //Todo Init
    console.log('in blog add screen');

    const {dispatch}=React.useContext(Context);

    const onSubmit=blog=>{
        dispatch({type:"add_post", payload:blog});
        navigation.navigate("IndexScreen");
    };
    
    const addDummyPost=()=>{
        dispatch({type:"add_dummy_post"});
        navigation.navigate("IndexScreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Whats On your mind today?</Text>
            <Button
                
                title='Add Dummy Post'
                onPress={addDummyPost}
            />
            <BlogEditor
                    blog={{id:0,title:'',body:''}}
                    onSubmit={onSubmit}  />

        </View>
    );
};

export default BlogAddScreen;