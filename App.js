
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './Navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    
      <NavigationContainer>
     <BottomTabNavigator/>
     </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
