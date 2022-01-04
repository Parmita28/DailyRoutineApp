import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import TodoScreen from "./screens/Todo";
import DetailsScreen from "./screens/Details";
import DoneScreen from "./screens/Done";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Done" component={DoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;