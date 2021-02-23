import React,{useContext} from 'react';
import {View,Text,Button,FlatList,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import ForEach from '../components/ForEach';
//import BlogContext,{getBlogApi} from '../context/BlogContext';
import {Context as BlogContext} from '../context/BlogContext';
import { Entypo,Feather } from '@expo/vector-icons';


const styles= StyleSheet.create({
    container:{
        margin:5
    },
    blog:{
        borderBottomWidth:1,
        margin:5,
        padding:5,
        flexDirection:'row'
        //justifyContent: 'space-between',
    },
    title:{
        fontSize:22,
        paddingBottom:5,
       flex:1 
      
    },
    selectButton:{
        //borderWidth:1,
        flex:1,
    },
    list:{
        //flex:1
    },
    icon:{
        fontSize:40,
        color:'darkred'
    },
    headerButton:{
        marginRight:15,
        fontSize:40
    }

});

const BlogList=({blogs,onSelect,onDeleteItem})=>{

    if(!blogs.length)
        return <Text>No Blogs Yet. Start a New one</Text>

    return (
        <FlatList style={styles.list}
                data={blogs}
                keyGenerator={item=>""+item.id}
                renderItem={({item})=>(
                    <View style={styles.blog}>
                        <TouchableOpacity style={styles.selectButton} onPress={()=>onSelect(item.id)}>
                            <Text style={styles.title}>{item.id}-{item.title}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>onDeleteItem(item.id)}>
                            <Entypo style={styles.icon} name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
            />
    );

};

const IndexScreen= ({navigation})=> {
    
    //Todo Init
   //const value=getBlogs();
   //const value=useContext(BlogContext);
   let {state,dispatch}= useContext(BlogContext);
   //let api=getBlogApi();
    //console.log('blogs api',api);
    //console.log('state',state);
    const deleteItem=(id)=>{
    
        console.log('delete',id);
        dispatch({type:'remove_post',payload:id});
    };

    const selectItem=(id)=>{
        dispatch({type:'select_post', payload:id});
        navigation.navigate('BlogDetailsScreen',{id});
    };

    const addBlog=()=>{
        console.log('adding new blog');
        navigation.navigate('BlogAddScreen');
    };

    return (
        <View style={styles.container}>
            
           <BlogList 
                    blogs={state.blogs} 
                    onSelect={selectItem}
                    onDeleteItem={deleteItem} 
            />     
              
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('BlogAddScreen')}>
            <Feather name="plus" style={styles.headerButton} />
          </TouchableOpacity>
        ),
        title:"Blog List"
      };
}

export default IndexScreen;