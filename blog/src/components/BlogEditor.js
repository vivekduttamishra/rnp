import React,{useState} from 'react';
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        margin:5
        
    },
    title:{
        borderWidth:1,
        padding:5,
        fontSize:18,
        marginVertical:20
    },
    body:{
        borderWidth:1,
        padding:10,
        fontSize:14,
        marginVertical:20,
        height:300,
        textAlignVertical:'top'


    },
    submit:{

    }
});

const BlogEditor= ({blog,onTitleChange,onBodyChange,onSubmit})=> {
    //Todo Init
    let [title,setTitle]=useState(blog.title);
    let [body, setBody]=useState(blog.body);

    const _onTitleChange=(text)=>{
        setTitle(text);
        if(onTitleChange)
            onTitleChange(text);
    }

    const _onBodyChange=(text)=>{
        setBody(text);
        if(onBodyChange)
            onBodyChange(text);
    }

    const _onSubmit=()=>{
        if(onSubmit)
            onSubmit({id:blog.id,title,body});
    }

    return (
        <View style={styles.container}>
           <TextInput 
                    placeholder='Title'
                    value={title}
                    style={styles.title}
                    onChangeText={_onTitleChange}
                    />
            <TextInput
                    placeholder='Body'
                    value={body}
                    style={styles.body}
                    onChangeText={_onBodyChange}
                    multiline={true}
                    />
            <Button title="Save" 
                    onPress={_onSubmit}
                    style={styles.submit}
                    />
        </View>
    );
};

BlogEditor.defaultProps={
    blog:{
        id:0,
        title:'',
        body:''
    }
}

export default BlogEditor;