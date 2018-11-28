import React from 'react';
import { StyleSheet } from 'react-native';


import Homepage from './src/components/Homepage'
import Login from './src/components/Login'
import { Router, Stack, Scene, Actions} from "react-native-router-flux";

const App = () => {
  return (
    <Router>
          <Stack key="root">
            <Scene key="homepage" component={Homepage} title="Home"/>
            <Scene key="login" component={Login} title="Login"/>
          </Stack>
    </Router>
  );
}

module.exports = App;


