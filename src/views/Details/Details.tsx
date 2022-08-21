import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Container from '../../components/Container';
import {NavigationProps} from '../../constants/types';
import {IAplicationState, item} from '../../state/aplication/type';
import {SharedElement} from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/utils';
import ProfileContent from '../../components/ProfileContent';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import {IState} from '../../state/root';
import {getImageProfiles} from '../../state/aplication/action';
import {ActionCreator} from 'redux';
import {Platform} from 'react-native';

interface DetailsProps {
  navigation: NavigationProps;
  route: any;
  aplication: IAplicationState;
}

const Details = (props: DetailsProps) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const left = () => {
    props.navigation.navigate('Home');
  };

  const _item: item = props.route.params;

  const handlerMove = (locationX: number) => {
    if (!touchStart) {
      return;
    }

    const ruleOne = _item.index! < props.aplication.items.length - 1;
    const ruleTwo = _item.index! !== 0;

    if (touchStart > locationX && ruleOne) {
      props.navigation.navigate('Details', {
        ...props.aplication.items[_item.index! + 1],
        index: _item.index! + 1,
      });
    } else if (touchStart < locationX && ruleTwo) {
      props.navigation.navigate('Details', {
        ...props.aplication.items[_item.index! - 1],
        index: _item.index! - 1,
      });
    }
    setTouchStart(null);
  };

  return (
    <View
      onTouchStart={e => setTouchStart(e.nativeEvent.locationX)}
      onTouchEnd={e => handlerMove(e.nativeEvent.locationX)}>
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
              isTouchable={true}
              subtitle={'View proile'}
              image={_item.user.profile_image.medium}
              action={() => props.navigation.navigate('Profile', {item: _item})}
            />
          </View>
        </FastImage>
      </Animatable.View>
    </View>
  );
};

const mapStateToProps = (state: IState) => ({
  aplication: state.aplication,
});

export default connect(mapStateToProps, null)(Details);

const styles = StyleSheet.create({
  containerFooter: {
    height:
      Platform.OS === 'android' ? SCREEN_HEIGHT * 0.4 : SCREEN_HEIGHT * 0.3,
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
