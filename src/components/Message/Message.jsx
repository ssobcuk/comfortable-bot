import React from 'react';
import {View, Text} from 'react-native';
import styles from './Message.styles';

const Message = ({message, index}) => (
  <View style={[styles.messageWrapper, index % 2 === 0 && styles.messageLight]}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default Message;
