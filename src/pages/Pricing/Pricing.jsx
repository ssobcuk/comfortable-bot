import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Pricing.styles';

const Pricing = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Prices for OpenAI Models:</Text>

        <View style={styles.model}>
          <Text style={styles.modelName}>GPT-4:</Text>
          <Text style={styles.modelDetails}>
            Price: $30.00 for 1 million tokens, $60.00 for 1 million tokens with
            an increased quality level. {'\n\n'}
            Price per message: Approximately 0.03 - 0.06 cents per message
            (depending on the quality level).
          </Text>
        </View>

        <View style={styles.model}>
          <Text style={styles.modelName}>
            GPT-3.5 Turbo (gpt-3.5-turbo-0125):
          </Text>
          <Text style={styles.modelDetails}>
            Price: $0.50 for 1 million tokens, $1.50 for 1 million tokens with
            an increased quality level. {'\n\n'}
            Price per message: Approximately 0.0005 - 0.0015 cents per message
            (depending on the quality level).
          </Text>
        </View>

        <View style={styles.model}>
          <Text style={styles.modelName}>Davinci-002:</Text>
          <Text style={styles.modelDetails}>
            Price: $2.00 for 1 million tokens. {'\n\n'}
            Price per message: Approximately 0.002 cents per message.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pricing;
