import React from 'react';
import store from './store/store';
import {Provider, useSelector} from 'react-redux';
import Home from './screens/home/Home';
import League from './screens/league/League';
import Player from './screens/player/Player';
import Team from './screens/team/Team';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GluestackUIProvider, Spinner, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LeagueTeamTab from './screens/league/LeagueTeamsTab';
import LeagueScheduleTab from './screens/league/LeagueScheduleTab';
import LeagueSeasonTab from './screens/league/LeagueSeasonTab';
import LeagueDetailsTab from './screens/league/LeagueDetails';
import createLeague from './screens/league/CreateLeague';
import PlayerStatsTab from './screens/player/PlayerStatsTab';
import PlayerActivityTab from './screens/player/PlayerActivityTab';
import PlayerDetailsTab from './screens/player/PlayerDetailsTab';
import ResetPassword from './screens/auth/ResetPassword';
import SignUp from './screens/auth/SignUp';
import SignIn from './screens/auth/SignIn';
import {selectUser} from './selectors/userSelector';
import LoadingSpinner from './components/LoadingSpinner';
import SignUpButton from './components/SignUpButton';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1C1C1D', // Background color for the whole app
  },
};

const LeagueTopTab = createMaterialTopTabNavigator();
const PlayerTopTab = createMaterialTopTabNavigator();
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
        name="League"
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

const TopLeagueDetailsTab: React.FC<{navigation: any; route: any}> = ({
  navigation,
  route,
}) => {
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
          name="Season"
          component={LeagueSeasonTab}
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

const TopPlayerDetailsTab = ({route}: any) => {
  const {itemId} = route.params;
  return (
    <>
      <PlayerDetailsTab item={itemId} />
      <PlayerTopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            color: '#ffffff',
            fontSize: 13,
          },
          tabBarStyle: {
            backgroundColor: '#252526',
          },
        }}>
        <PlayerTopTab.Screen
          name="Stats"
          component={PlayerStatsTab}
          initialParams={itemId}
        />
        <PlayerTopTab.Screen
          name="Activity"
          component={PlayerActivityTab}
          initialParams={itemId}
        />
      </PlayerTopTab.Navigator>
    </>
  );
};

const signUp = <SignUpButton />;
const LoginFlowStack = ({component}) => {
  const {user, loading, error} = useSelector(selectUser);
  // Need error handling
  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }
  console.log(user);
  return (
    <Stack.Navigator>
      {user == null ? (
        <>
          <Stack.Screen
            name="Sign in"
            component={SignIn}
            options={{
              headerTitle: '',
              headerRight: () => component,
            }}
          />
          <Stack.Screen
            name="Sign up"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Reset password"
            component={ResetPassword}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
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
            component={TopPlayerDetailsTab}
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
          <Stack.Screen
            name="Create League"
            component={createLeague}
            options={{
              headerLeft: () => null,
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
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer theme={customTheme}>
          <LoginFlowStack component={signUp} />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
};

export default App;
