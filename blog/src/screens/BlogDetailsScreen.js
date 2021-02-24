import React from 'react';
import {View,Text,Button,TouchableOpacity, ScrollView,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
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
    },
    headerButton:{
        paddingRight:10,
        fontSize:30
    }
});

const BlogDetailsScreen= ({navigation})=> {
   
    let {state} = React.useContext(Context);
    React.useEffect(()=>{
        navigation.setParams({title:state.selectedBlog.title});
    },[state]);

   //Todo Init
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{state.selectedBlog.title}</Text>
           
           <ScrollView>
                <Text style={styles.body}>{state.selectedBlog.body}</Text>
           </ScrollView>
        </View>
    );
};
BlogDetailsScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('BlogEditScreen')}>
            <Feather name="edit" style={styles.headerButton} />
          </TouchableOpacity>
        ),
        title:navigation.getParam('title')
      };
};

export default BlogDetailsScreen;