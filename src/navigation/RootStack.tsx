import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SettingsScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Settings' component={SettingsScreen} />
  </Stack.Navigator>
);
