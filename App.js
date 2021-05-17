import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
import Navigator from './routes/homeStack'
import About from './screens/about';
import Home from './screens/home';

export default function App() {
  return (
    
    
<Navigator/>

  
  )
}
