import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationProps} from '../constants/types';
import {normalize} from '../constants/utils';

interface HeaderProps {
  navigation: NavigationProps;
}

const Header = (props: HeaderProps) => {
  const letAction = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={letAction}>
        <Image source={require('../../assets/image/Menu.png')} />
      </TouchableOpacity>
      <View>
        <Text style={styles.TextHeader}>Discover</Text>
      </View>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextHeader: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    fontFamily: 'MuseoSans-500',
  },
});
