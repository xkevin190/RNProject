import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/utils';

interface ContainerProps {
  children: JSX.Element;
}

const Container = (props: ContainerProps) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SCREEN_HEIGHT * 0.073,
    marginHorizontal: SCREEN_WIDTH * 0.067,
  },
});
