import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import { SCREEN_HEIGHT } from '../constants/utils';

interface ProfileContentProps {
  name: string;
  subtitle: string;
  image: string;
}

const ProfileContent = (props: ProfileContentProps) => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={{uri: props.image}} />
      <View>
        <Text style={styles.textName}>{props.name}</Text>
        <Text style={styles.textSubtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
      paddingTop: SCREEN_HEIGHT * 0.02,
      flexDirection: 'row'
  },
  image: {
    width: 37,
    height: 37,
    borderRadius: 100,
    marginRight: 10,
  },
  textName: {
    fontFamily: 'MuseoSans-500',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  textSubtitle: {
    fontFamily: 'MuseoSans-500',
    fontSize: 12,
    fontWeight: '200',
    color: '#FFFFFF',
    paddingTop: 5,
  },
});
