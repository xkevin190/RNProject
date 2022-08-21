import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SCREEN_HEIGHT} from '../constants/utils';

interface ProfileContentProps {
  name: string;
  subtitle: string;
  image: string;
  isTouchable: boolean;
  styleTitle?: StyleProp<TextStyle>;
  styleSubtitle?: StyleProp<TextStyle>;
  styleImage?: StyleProp<ViewStyle>;
  action?: () => void;
}

const ProfileContent = (props: ProfileContentProps) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={[styles.image, props.styleImage]}
        source={{uri: props.image}}
      />
      <View style={{flex: 1}}>
        <Text style={[styles.textName, props.styleTitle]}>{props.name}</Text>
        {props.isTouchable ? (
          <TouchableOpacity onPress={props.action}>
            <Text style={[styles.textSubtitle, props.styleSubtitle]}>
              {props.subtitle}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.textSubtitle, props.styleSubtitle]}>
            {props.subtitle}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    paddingTop: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
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
