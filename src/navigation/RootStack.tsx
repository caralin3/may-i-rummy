import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, PlayScreen, RulesScreen, SettingsScreen } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Play: undefined;
  Rules: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Play' component={PlayScreen} />
    <Stack.Screen name='Rules' component={RulesScreen} />
    <Stack.Screen name='Settings' component={SettingsScreen} />
  </Stack.Navigator>
);
