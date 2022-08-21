import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Container from '../../components/Container';
import {NavigationProps} from '../../constants/types';
import {item} from '../../state/aplication/type';
import {SharedElement} from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/utils';

interface DetailsProps {
  navigation: NavigationProps;
  route: any;
}

const Details = (props: DetailsProps) => {
  const left = () => {
    props.navigation.navigate('Home');
  }

  const _item: item = props.route.params;
  return (
    <SharedElement id={`item.${_item.id}`}>
      <FastImage
        style={styles.imageContainer}
        source={{uri: _item.urls.regular}}>
        <Container>
          <TouchableOpacity onPress={left}>
            <Image
              source={require('../../../assets/image/ic_white_close.png')}
            />
          </TouchableOpacity>
        </Container>
      </FastImage>
    </SharedElement>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
