import Pricing from '../../pages/Pricing/Pricing';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

const PricingStack = createStackNavigator();
const PricingStackScreen = () => {
  return (
    <PricingStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <PricingStack.Screen name="PricingPage" component={Pricing} />
    </PricingStack.Navigator>
  );
};

export default PricingStackScreen;
