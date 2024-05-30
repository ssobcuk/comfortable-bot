import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './BotItem.styles';

const BotItem = ({bot, navigation}) => {
  const {name, desc, icon, botId} = bot;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Chat', {botId, name})}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={{uri: icon}} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default BotItem;
