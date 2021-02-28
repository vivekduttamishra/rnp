import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {enableScreens} from 'react-native-screens';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import MealsNavigator from './src/navigations/MealsNavigator';

//enableScreens();

let fetchFonts = () => {
  console.log('fetching fonts...');
  return Font.loadAsync({
    Kanadaka: require('./assets/fonts/akayakanadaka.ttf'),
    Telivigala: require('./assets/fonts/akayatelivigala.ttf'),
    Oswald: require('./assets/fonts/oswald.ttf'),
    ReggaeOne: require('./assets/fonts/reggaeone.ttf'),
    Raleway: require('./assets/fonts/raleway.ttf')
    
  });

  //return console.log('fetched');
}

const FontPreview = ({font,text})=>{
  if(!text) 
    text=font;

  const preview={
    fontFamily:font,
    fontSize:30
  }

  return (<Text style={preview}>{text}</Text>);
}

const FontPreviewer=()=>{
  return <SafeAreaView>
      <View style={styles.container}>
        <FontPreview font="Oswald" />
        <FontPreview font="Raleway" />
        <FontPreview font="Kanadaka" />
        <FontPreview font="Telivigala" />
        <FontPreview font="ReggaeOne" />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>;
}

export default function App() {

  let [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    console.log('loading fonts', loading);
  }, [loading]);

  if (loading)
    //console.log('if loading', loading);
  return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setLoading(false)}
      onError={(e) => console.log(e)}
    />
  );

  return (
    
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font1:{
    fontFamily:'Oswald',
    fontSize:30
  },
  font2:{
    fontFamily:'Kanadaka',
    fontSize:30
  },
  font3:{
    fontFamily:'Oswald',
    fontSize:30
  },
  font4:{
    fontFamily:'Oswald',
    fontSize:30
  },

});
