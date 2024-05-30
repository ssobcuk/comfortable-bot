import Bots from '../../pages/Bots/Bots';
import Chat from '../../pages/Chat/Chat';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const BotsStack = createStackNavigator();
const BotsStackScreen = () => {
  return (
    <BotsStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <BotsStack.Screen name="BotsPage" component={Bots} />
      <BotsStack.Screen name="Chat" component={Chat} />
    </BotsStack.Navigator>
  );
};

export default BotsStackScreen;
