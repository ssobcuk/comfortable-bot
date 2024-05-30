import Pricing from '../../pages/Pricing/Pricing';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import About from '../../pages/About/About';

const AboutStack = createStackNavigator();
const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <AboutStack.Screen name="AboutPage" component={About} />
    </AboutStack.Navigator>
  );
};

export default AboutStackScreen;
