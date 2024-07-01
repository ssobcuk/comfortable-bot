import React from 'react';
import {TouchableOpacity, View, TextInput} from 'react-native';
import SendIcon from '../../../assets/svg/SendIcon';
import styles from './ChatInput.styles';

const ChatInput = ({onSend, scrollToEnd, message, setMessage}) => {
  const sendMessage = async () => {
    if (message.trim()) {
      await onSend(message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        placeholder="Ask me something!"
        multiline
        onFocus={scrollToEnd}
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
