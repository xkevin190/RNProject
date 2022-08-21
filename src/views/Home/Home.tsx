import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {NavigationProps} from '../../constants/types';
import {IAplicationState, item} from '../../state/aplication/type';
import {IState} from '../../state/root';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {ActionCreator} from 'redux';
import {getImages} from '../../state/aplication/action';
import {SharedElement} from 'react-navigation-shared-element';
import Item from '../../components/Item';

interface HomeProps {
  navigation: NavigationProps;
  aplication: IAplicationState;
  getItems: () => void;
}

const Home = (props: HomeProps) => {
  React.useEffect(() => {
    props.getItems();
  }, []);

  const action = (item, index) => {
    props.navigation.navigate('Details', {...item, index: index});
  };

  const RenderItem = (renderProps: {
    item: item;
    index: number;
  }): JSX.Element => (
    <SharedElement style={{width: '50%'}} id={`item.${renderProps.item.id}`}>
      <Item action={action} {...renderProps} />
    </SharedElement>
  );

  return (
    <Container>
      <Header navigation={props.navigation} />
      <FlatList
        style={{marginTop: 30}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={props.aplication.items}
        renderItem={RenderItem}
      />
    </Container>
  );
};

const mapStateToProps = (state: IState) => ({
  aplication: state.aplication,
});

const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getItems: () => dispatch(getImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
