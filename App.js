import React from 'react';
import { StyleSheet , Text} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import Homepage from './src/components/Homepage';
import Favorites from './src/components/Favorites';
import Login from './src/components/Login';
import { Router, Stack, Scene, Actions} from "react-native-router-flux";

const TabIcon = ({ focused, title }) => {
  let iconName = "ios-";
  if(title == 'Favorites'){
    iconName += "heart"
  }
  else if (title == 'Home'){
    iconName += "home"
  }
  else {
    iconName += "contact"
  }

  return (
    <Icon
      name={iconName}
      size={25}
      color={focused ? "#E89F2E" : "#333333"}
    >

    </Icon>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar="true">
        <Scene 
          key="home"
          tabs
          showLabel={false}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <Scene key="dashboard" component={Homepage} title="Home" initial icon={TabIcon}/>
          <Scene key="favorite" component={Favorites} title="Favorites" icon={TabIcon}/>
          
        </Scene>
        {/* <Scene key="login" component={Login} title="Login"/> */}
      </Scene>
    </Router>
  );
}

module.exports = App;


