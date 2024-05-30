import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './Bots.styles';
import BotItem from '../../components/BotItem/BotItem';
import {getBots} from '../../../services/getBots';
import Animated, {
  SlideInLeft,
  LinearTransition,
  SlideInUp,
} from 'react-native-reanimated';

const Bots = ({botId, navigation}) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    (async () => {
      const availableBots = await getBots();
      
      setBots(availableBots);
    })();
  }, []);

  const renderItem = item => (
    <Animated.View
      entering={SlideInUp.duration(1500)}
      layout={LinearTransition.springify()}
      style={styles.animatedFlatlist}>
      <BotItem bot={item} navigation={navigation} />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Animated.View
          entering={SlideInLeft.duration(500)}
          layout={LinearTransition.springify()}>
          <Text style={styles.title}>{'Push & Chat ↓'}</Text>
        </Animated.View>
        <FlatList
          onRefresh={() => getBots()}
          refreshing={false}
          data={bots}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.name}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 40,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bots;
