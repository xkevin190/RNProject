import * as React from 'react';
import {StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/utils';

interface ContainerProps {
  children: JSX.Element;
}

const Container = (props: ContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{props.children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' ? SCREEN_HEIGHT * 0.033 : SCREEN_HEIGHT * 0.073,
    marginHorizontal: SCREEN_WIDTH * 0.067,
  },
});
