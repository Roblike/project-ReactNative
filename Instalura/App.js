import React, {Fragment, useState, useEffect} from 'react';
import Feed from "./src/Views/feed/Feed";
import Login from './src/Views/Login/Login';
import { createStackNavigator } from "react-navigation-stack";
import{createAppContainer } from "react-navigation"



const navigator = createStackNavigator({
  Login :{ screen: Login},
  Feed : { screen: Feed}
})

const AppContainer = createAppContainer(navigator)

const App = () => {
  
 //declara uma nova variável de state que chamamos de count(fotos)
 //todo Hook inicia com use

  return (
   <AppContainer/>
  ) 
};
  
  export default App;
