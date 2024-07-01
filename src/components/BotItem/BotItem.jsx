import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './BotItem.styles';

const BotItem = ({bot, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Chat', {botId: bot.botId, name: bot.name})
      }>
      <View>
        <Text style={styles.title}>{bot.name}</Text>
        <Text style={styles.desc}>{bot.desc}</Text>
      </View>
      <Image source={{uri: bot.icon}} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default BotItem;
