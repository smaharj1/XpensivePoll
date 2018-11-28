import React from 'react';
import { StyleSheet , Text} from 'react-native';


import Homepage from './src/components/Homepage';
import Favorites from './src/components/Favorites';
import Login from './src/components/Login';
import { Router, Stack, Scene, Actions} from "react-native-router-flux";

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar="true">
        <Scene 
          key="home"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <Scene key="dashboard" component={Homepage} title="Home" initial icon={TabIcon}/>
          <Scene key="favorite" component={Favorites} title="Favorites" icon={TabIcon}/>
          
        </Scene>
        <Scene key="login" component={Login} title="Login"/>
      </Scene>
    </Router>
  );
}

module.exports = App;


