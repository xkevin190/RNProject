import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Container from '../../components/Container';
import {NavigationProps} from '../../constants/types';
import {item} from '../../state/aplication/type';
import {SharedElement} from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/utils';
import ProfileContent from '../../components/ProfileContent';
import * as Animatable from 'react-native-animatable';

interface DetailsProps {
  navigation: NavigationProps;
  route: any;
}

const Details = (props: DetailsProps) => {
  const left = () => {
    props.navigation.navigate('Home');
  };

  const _item: item = props.route.params;
  const AnimatableTouchableOpacity =
    Animatable.createAnimatableComponent(TouchableOpacity);

  return (
    <>
      <SharedElement id={`item.${_item.id}`}>
        <FastImage
          style={styles.imageContainer}
          source={{uri: _item.urls.regular}}>
          <Container>
            <AnimatableTouchableOpacity animation={'fadeInLeft'} onPress={left}>
              <Image
                source={require('../../../assets/image/ic_white_close.png')}
              />
            </AnimatableTouchableOpacity>
          </Container>
        </FastImage>
      </SharedElement>
      <Animatable.View animation={'fadeInUpBig'} style={styles.containerFooter}>
        <FastImage
          style={styles.opacityContainer}
          source={require('../../../assets/image/OpacityImage.png')}>
          <View>
            <Text numberOfLines={2} style={styles.textTitle}>
              {_item.description || 'No avaliable description'}
            </Text>
            <Text style={styles.textSubtitle}>{_item.likes} likes</Text>
            <ProfileContent
              name={_item.user.name}
              subtitle={'View proile'}
              image={_item.user.profile_image.medium}
            />
          </View>
        </FastImage>
      </Animatable.View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  containerFooter: {
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
  },
  imageContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  opacityContainer: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.067,
    paddingTop: SCREEN_HEIGHT * 0.03,
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'MuseoSans-500',
  },
  textSubtitle: {
    paddingTop: SCREEN_HEIGHT * 0.02,
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    fontFamily: 'MuseoSans-500',
  },
});
