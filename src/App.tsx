import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux';
import Home from './screens/home/Home';
import League from './screens/league/League';
import Player from './screens/player/Player';
import Tournament from './screens/tournaments/Tournament';
import Team from './screens/team/Team';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Leagues" component={League} />
            <Tab.Screen name="Tournaments" component={Tournament} />
            <Tab.Screen name="Player" component={Player} />
            <Tab.Screen name="Team" component={Team} />
          </Tab.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
