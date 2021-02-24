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
    },
    dummyButton:{
        paddingTop:10,
        alignItems: 'flex-end'
    },
    status:{
        marginTop:20,
        textAlign:"center",
        color:'gray',
        borderTopWidth:1
    }
});

const BlogAddScreen= ({navigation})=> {
    //Todo Init
    console.log('in blog add screen');
    
    React.useEffect(()=>{
        //navigation.setParams({title: "New Post"});
        console.log('trying to update the title');
        navigation.setParams({title:'Add Post'});
       
    },[]);

    const {dispatch,
        addBlog,
        addDummyBlog,
        state}=React.useContext(Context);

    const onSubmit=blog=>{
        // dispatch({type:"add_post", payload:blog});
        // navigation.navigate("IndexScreen");

        addBlog(blog, ()=>{
            navigation.navigate("IndexScreen");
        });
    };
    
    const addDummyPost=()=>{
        dispatch({type:"add_dummy_post"});
        navigation.navigate("IndexScreen");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Whats On your mind today?</Text>
            <View style={styles.dummyButton}>
                <Button
                    style={styles.dummyButton}
                    title='Add Dummy Post'
                    onPress={addDummyPost}
                />
            </View>
            
            <BlogEditor onSubmit={onSubmit}  />

            <Text style={styles.status}>{state.status}</Text>
        </View>
    );
};

BlogAddScreen.navigationOptions = ({navigation})=>{
    return {
        // headerRight: () => (
        //   <TouchableOpacity onPress={() => navigation.navigate('BlogAddScreen')}>
        //     <Feather name="plus" style={styles.headerButton} />
        //   </TouchableOpacity>
        // ),
        title:navigation.getParam('title')
      };
};

export default BlogAddScreen;