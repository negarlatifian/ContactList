import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Customer from './component/Customer';
import List from './component/List';
import RegisterScreen from './component/RegisterScreen';
import LoginScreen from './component/LoginScreen';
import { useState, createContext } from 'react';

const Stack = createStackNavigator();
// const UserContext = createContext(null);
global.currentUser = 'CONTACT LIST | The Reactors';

export default function App() {
  // const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <UserContext.Provider value={user}> */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // options={{ title: 'CONTACT LIST | The Reactors' }}
          options={{ title: global.currentUser }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: global.currentUser }}
        />
        <Stack.Screen
          name="List"
          component={List}
          // options={{ title: 'CONTACT LIST | The Reactors' }}
          options={{ title: global.currentUser }}
        />
        <Stack.Screen name="Customer" component={Customer} />
        {/* </UserContext.Provider> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
