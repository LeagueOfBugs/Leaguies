import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux';
import Home from './screens/home/Home';
import League from './screens/league/League';
import Player from './screens/player/Player';
import Team from './screens/team/Team';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LeagueTeamTab from './screens/league/LeagueTeamsTab';
import LeagueScheduleTab from './screens/league/LeagueScheduleTab';
import LeagueHomeTab from './screens/league/LeagueHomeTab';
import LeagueDetailsTab from './screens/league/LeagueDetails';

const LeagueTopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#1C1C1D'}, // Background color for the bottom tab navigator
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Leagues"
        component={League}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Team" component={Team} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const TopLeagueDetailsTab = ({navigation, route}) => {
  const {item} = route?.params ?? {};

  return (
    <>
      <LeagueDetailsTab navigation={navigation} route={route} />
      <LeagueTopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            color: '#ffffff',
            fontSize: 13,
          },
          tabBarStyle: {
            backgroundColor: '#252526',
          },
        }}>
        <LeagueTopTab.Screen
          name="News"
          component={LeagueHomeTab}
          initialParams={{item}}
        />
        <LeagueTopTab.Screen
          name="Teams"
          component={LeagueTeamTab}
          initialParams={{item}}
        />
        <LeagueTopTab.Screen
          name="Schedule"
          component={LeagueScheduleTab}
          initialParams={{item}}
        />
      </LeagueTopTab.Navigator>
    </>
  );
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="League Details"
              component={TopLeagueDetailsTab}
              options={{
                headerStyle: {
                  backgroundColor: '#252526',
                },
                headerTitle: '',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Player Details"
              component={Player}
              options={{
                headerStyle: {
                  backgroundColor: '#252526',
                },
                headerTitle: '',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Team Details"
              component={Team}
              options={{
                headerStyle: {
                  backgroundColor: '#252526',
                },
                headerTitle: '',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
