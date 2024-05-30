import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './About.styles';

const About = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>
        This is a test version of ComfortableBot. Here you can try out various
        generative models without subscribing. Prices for usage are provided in
        the Pricing tab.{'\n'}Don't worry, it's free for you :)
      </Text>
      <Text style={styles.point}>···</Text>
      <Text style={styles.subtitle}>
        As this is a beta version, only the basic functionality is available for
        now. {'\n'}Of course, I plan to expand the capabilities of the
        ComfortableBot, including authorization, saving message and chat
        history, payment for usage, extending model settings, and much more. But
        for now, main goal of the app - show the results of my work as a
        developer. So enjoy using it ;)
      </Text>
      <Text style={styles.signature}>O. Sobchuk</Text>
    </View>
  );
};

export default About;
