import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {NavigationProps} from '../../constants/types';
import {IAplicationState} from '../../state/aplication/type';
import {IState} from '../../state/root';
import Container from '../../components/Container';
import Header from '../../components/Header';

interface HomeProps {
  navigation: NavigationProps;
  aplication: IAplicationState;
}

const Home = (props: HomeProps) => {
  return (
    <Container>
      <Header navigation={props.navigation} />
      <Text>Home</Text>
    </Container>
  );
};

const mapStateToProps = (state: IState) => ({
  aplication: state.aplication,
});

export default connect(mapStateToProps, null)(Home);

const styles = StyleSheet.create({
  container: {},
});
