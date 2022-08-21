import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {ActionCreator} from 'redux';
import Container from '../../components/Container';
import Item from '../../components/Item';
import ProfileContent from '../../components/ProfileContent';
import {NavigationProps} from '../../constants/types';
import {SCREEN_HEIGHT} from '../../constants/utils';
import {
  clearProfileItems,
  getImageProfiles,
} from '../../state/aplication/action';
import {IAplicationState, item} from '../../state/aplication/type';
import {IState} from '../../state/root';

interface ProfileProps {
  route: any;
  getItems: (url: string) => void;
  aplication: IAplicationState;
  navigation: NavigationProps;
  clearItems: () => void;
}

const Profile = (props: ProfileProps) => {
  const _item: item = props.route.params.item;

  const left = () => {
    props.navigation.pop();
  };

  React.useEffect(() => {
    props.getItems(_item.user.links.photos);
    return () => {
      props.clearItems();
    };
  }, []);

  const RenderItem = (renderProps: {
    item: item;
    index: number;
  }): JSX.Element => <Item action={() => null} {...renderProps} />;

  return (
    <Container>
      <TouchableOpacity onPress={left}>
        <Image source={require('../../../assets/image/ic_black_close.png')} />
      </TouchableOpacity>
      <View style={{paddingTop: 10}}>
        <ProfileContent
          styleTitle={styles.title}
          styleSubtitle={styles.subtitle}
          styleImage={styles.image}
          isTouchable={false}
          name={_item.user.name}
          image={_item.user.profile_image.medium}
          subtitle="British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture."
        />

        <Text style={styles.myPothos}>My Photos</Text>

        <FlatList
          style={{marginTop: 30}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={props.aplication.profileItems}
          renderItem={RenderItem}
        />
      </View>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getItems: (url: string) => dispatch(getImageProfiles(url)),
  clearItems: () => dispatch(clearProfileItems()),
});

const mapStateToProps = (state: IState) => ({
  aplication: state.aplication,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MuseoSans-500',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'MuseoSans-500',
    fontSize: 14,
    fontWeight: '300',
    color: '#000000',
  },
  image: {
    height: 63,
    width: 63,
    marginRight: 10,
  },
  myPothos: {
    marginTop: SCREEN_HEIGHT * 0.03,
    fontFamily: 'MuseoSans-700',
    fontWeight: 'bold',
    fontSize: 42,
  },
});
