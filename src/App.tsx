/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import store from './store/store';
import {Provider, useSelector} from 'react-redux';
import Home from './screens/home/Home';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import ResetPassword from './screens/auth/ResetPassword';
import SignUp from './screens/auth/SignUp';
import SignIn from './screens/auth/SignIn';
import SignUpButton from './components/SignUpButton';
import Validate from './screens/auth/Validate';
import ValidateReset from './screens/auth/ValidateReset';
import Header from './components/headers/HomeHeader';
import TeamNav from './navigationScreens/TeamNav';
import PlayerNav from './navigationScreens/PlayerNav';
import LeagueNav from './navigationScreens/LeagueNav';
import MatchForm from './screens/league/MatchForm';
import WebSocketComponent from './webSocket/WebSocket';
import SearchTeams from './screens/team/SearchTeams';
import LeagueForm from './screens/league/LeagueForm';
import SportsSelect from './screens/league/SportsSelect';
import LeagueLogo from './screens/league/LeagueLogo';
import TeamSportsSelect from './screens/team/SportsSelect';
import TeamForm from './screens/team/TeamForm';
import TeamLogo from './screens/team/TeamLogo';
import SeasonForm from './screens/league/season/SeasonForm';
import SeasonLogo from './screens/league/season/SeasonLogo';
import SeasonList from './screens/league/LeagueList';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#C0c0c0',
  },
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#000000'},
        tabBarLabelStyle: {color: 'white'},
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
            height: 100,
          },
          headerTitle: () => <Header header={'LEAGUIES'} />,
        }}
      />
      <Tab.Screen
        name="League"
        component={LeagueNav}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Player"
        component={PlayerNav}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Team"
        component={TeamNav}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const signUp = <SignUpButton />;
const LoginFlowStack = ({component}) => {
  const {loaded} = useSelector((state: RootState) => state.user);
  // Need error handling
  return (
    <Stack.Navigator>
      {!loaded ? (
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
          <Stack.Screen
            name="Validate"
            component={Validate}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Validate reset"
            component={ValidateReset}
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
            name="Search Teams"
            component={SearchTeams}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Match Form"
            component={MatchForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Season Form"
            component={SeasonForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Season List"
            component={SeasonList}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
            }}
          />
          <Stack.Screen
            name="League Form"
            component={LeagueForm}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
            }}
          />
          <Stack.Screen
            name="Team Form"
            component={TeamForm}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A TEAM'} />,
            }}
          />
          <Stack.Screen
            name="League Logo"
            component={LeagueLogo}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Team Logo"
            component={TeamLogo}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A TEAM'} />,
            }}
          />
          <Stack.Screen
            name="Season Logo"
            component={SeasonLogo}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
            }}
          />
          <Stack.Screen
            name="Team Sports Select"
            component={TeamSportsSelect}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A TEAM'} />,
            }}
          />
          <Stack.Screen
            name="Sports Select"
            component={SportsSelect}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerLeft: () => null,
              headerTitle: () => <Header header={'CREATE A LEAGUE'} />,
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
