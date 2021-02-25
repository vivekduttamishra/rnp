import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import BlogEditScreen from './src/screens/BlogEditScreen';
import BlogDetailsScreen from './src/screens/BlogDetailsScreen';
import BlogAddScreen from './src/screens/BlogAddScreen';
import LoginScreen from './src/screens/LoginScreen';

//import {BlogProvider} from './src/context/BlogContext';

import {Provider} from './src/context/BlogContext';

const navigator= createStackNavigator({
  IndexScreen,
  BlogDetailsScreen,
  BlogEditScreen,
  BlogAddScreen,
  LoginScreen

},{
  initialRouteName: 'LoginScreen',
  defaultNavigationOptions:{
    title: 'Blog Index'
  }
});


const App=createAppContainer(navigator);


export default ()=>(
  <Provider>
    <App/> 
  </Provider>
);