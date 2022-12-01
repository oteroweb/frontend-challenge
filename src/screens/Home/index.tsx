import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../Profile';
import ChatScreen from '../Chat';

const Tab = createMaterialTopTabNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
               tabBarActiveTintColor: '#FF8755',
               tabBarInactiveTintColor: 'rgba(0,0,0,0.5)',
               tabBarPressColor: '#FF8755',
               tabBarLabelStyle: { fontSize: 16, fontWeight: "700" },
               tabBarStyle: { paddingTop: 30, backgroundColor: 'white', },
               tabBarIndicatorStyle: { height: 5, backgroundColor: '#FF8755', },
               tabBarContentContainerStyle: { marginTop: 5, },
            }}
         >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
         </Tab.Navigator>
      </NavigationContainer >
   );
}
