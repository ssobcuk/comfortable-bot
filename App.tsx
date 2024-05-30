import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
