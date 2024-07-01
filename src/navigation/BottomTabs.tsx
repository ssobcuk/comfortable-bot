import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatbotIcon from '../../assets/svg/ChatbotIcon';
import CoinsIcon from '../../assets/svg/CoinsIcon';
import AboutIcon from '../../assets/svg/AboutIcon';
import BotsStackScreen from '../navigation/navigators/BotsStackScreen';
import PricingStackScreen from '../navigation/navigators/PricingStackScreen';
import AboutStackScreen from '../navigation/navigators/AboutStackScreen';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  const renderIcon = (route, focused) => {
    const color = focused ? '#FF6347' : '#494949';
    switch (route) {
      case 'Bots':
        return <ChatbotIcon fill={color} />;
      case 'Pricing':
        return <CoinsIcon fill={color} />;
      case 'About':
        return <AboutIcon fill={color} />;
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Bots"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => renderIcon(route.name, focused),
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 5,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          height: 100,
        },
        tabBarLabelStyle: {
          top: 5,
          fontSize: 14,
        },
        tabBarActiveTintColor: '#FF6347',
        tabBarInactiveTintColor: '#494949',
      })}>
      <Tab.Screen name="About" component={AboutStackScreen} />
      <Tab.Screen name="Bots" component={BotsStackScreen} />
      <Tab.Screen name="Pricing" component={PricingStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
