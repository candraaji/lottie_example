/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.textTitle}>React Native Lottie Example</Text>
        </View>
        <View style={styles.containerLottie}>
          <LottieView
            source={require('./assets/98642-error-404.json')}
            autoPlay
            loop
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  textTitle: {
    marginTop: '10%',
    textAlign: 'center',
    fontWeight: '700',
  },
  containerLottie: {
    width: '100%',
    height: 500,
  },
});

export default App;
