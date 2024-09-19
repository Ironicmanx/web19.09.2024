import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './src/Homescreen';
import Myappbar from './components/Myappbar';
import Profilescreen from './src/Profilescreen';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <Myappbar {...props}/>
        }}
      >
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Profile" component={Profilescreen} />
      </Stack.Navigator>
    </NavigationContainer>
   </PaperProvider>
  );
}