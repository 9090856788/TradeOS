import { Animated, StyleSheet, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '@react-navigation/native';

const DotLoading: FC = () => {
  const [animatedValue] = useState(
    Array.from({ length: 4 }, () => new Animated.Value(1)),
  );

  const { colors } = useTheme();

  useEffect(() => {
    startAnimation();
    return () => resetAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.stagger(
        100,
        animatedValue.map(val =>
          Animated.sequence([
            Animated.timing(val, {
              toValue: 0.5,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(val, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }),
          ]),
        ),
      ),
    ).start();
  };

  const resetAnimation = () => {
    animatedValue.forEach(value => value.setValue(1));
  };

  return (
    <View style={styles.container}>
      {animatedValue.map((value, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: colors.text,
              marginRight: index !== 3 ? RFValue(10) : 0,
              transform: [{ scale: value }],
            },
          ]}
        />
      ))}
    </View>
  );
};

export default DotLoading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: RFValue(18),
    height: RFValue(18),
    borderRadius: 60,
  },
});
