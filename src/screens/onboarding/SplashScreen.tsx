import { StyleSheet, View } from 'react-native';
import React from 'react';
import DotLoading from '../../components/global/DotLoading';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <DotLoading />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
