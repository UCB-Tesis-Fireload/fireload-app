import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
import InstitutionsScreen from '../screens/InstitutionsScreen'
import FireSectorScreen from '../screens/FireSectorScreen'

// icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// STACK navigation - INSTITUTIONS
const InstitutionsStack = createNativeStackNavigator();

function InstitutionsStackScreen() {
  return (
    <InstitutionsStack.Navigator>
      <InstitutionsStack.Screen name="Institutions Screen" component={InstitutionsScreen} />
      <InstitutionsStack.Screen name="Fire Sectors Screen" component={FireSectorScreen} />
    </InstitutionsStack.Navigator>
  );
}

// TAB navigation - HOME
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FA8011", // background color of the tab
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options = {{
          tabBarLabel: "INICIO",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen 
        name="Institutions" 
        component={InstitutionsStackScreen}
        options = {{
          tabBarLabel: "Instituciones",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="office-building-marker" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

export default Navigation