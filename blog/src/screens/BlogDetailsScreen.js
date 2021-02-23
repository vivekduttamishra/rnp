import React from 'react';
import {View,Text,Button,ScrollView,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogEditor from '../components/BlogEditor';

const styles= StyleSheet.create({
    container:{
        margin:5
    },
    title:{
        fontSize:40,
        textAlign:"center",
        paddingBottom:10,
    },
    body:{
        fontSize:18
    },
    editor:{
        marginTop:10,
        borderTopWidth:5,
        paddingTop:20
    }
});

const BlogDetailsScreen= ({navigation})=> {
   
    let {state} = React.useContext(Context);

   //Todo Init
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{state.selectedBlog.title}</Text>
            <Button title="edit" onPress={()=>navigation.navigate("BlogEditScreen")}/>
           <ScrollView>
                <Text style={styles.body}>{state.selectedBlog.body}</Text>
           </ScrollView>
        </View>
    );
};

export default BlogDetailsScreen;