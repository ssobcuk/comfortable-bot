import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import styles from './Chat.styles';
import {sendPrompt} from '../../../services/sendPrompt';
import {useRoute} from '@react-navigation/native';
import ChatInput from '../../components/ChatInput/ChatInput';
import Message from '../../components/Message/Message';
import CloseIcon from '../../../assets/svg/CloseIcon';

const Chat = ({navigation}) => {
  const route = useRoute();
  const {name, botId} = route.params;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef(null);

  const scrollToEnd = () => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current.scrollToEnd({animated: true});
      }, 100);
    }
  };

  const postMessage = async message => {
    setMessages(prev => [...prev, message]);
    scrollToEnd();
    Keyboard.dismiss();
    const answer = await sendPrompt(message, botId);
    scrollToEnd();
    setMessages(prev => [...prev, answer]);
    setMessage('');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-65}
        style={{zIndex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <TouchableOpacity
            style={styles.close}
            onPress={() => navigation.goBack()}>
            <CloseIcon />
          </TouchableOpacity>
          <View style={styles.messagesContainer}>
            <ScrollView
              ref={scrollViewRef}
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContainer}
              showsVerticalScrollIndicator={false}>
              {messages.map((el, index) => (
                <Message index={index} message={el} key={index} />
              ))}
            </ScrollView>
          </View>
          <ChatInput
            onSend={postMessage}
            scrollToEnd={scrollToEnd}
            message={message}
            setMessage={setMessage}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
