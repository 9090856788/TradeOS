import { StyleSheet, Text } from 'react-native';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface customeSafeAreaViewProps {
  children: React.ReactNode;
  style?: object;
}

const CustomeSafeAreaView: FC<customeSafeAreaViewProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.container, style]}>{children}</Text>
    </SafeAreaView>
  );
};

export default CustomeSafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 20,
  },
});
