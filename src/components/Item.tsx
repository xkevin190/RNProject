import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {item} from '../state/aplication/type';
import FastImage from 'react-native-fast-image';

interface ItemProps {
  item: item;
  index: number;
  action: (item: item, index: number) => void;
}

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const Item = (props: ItemProps) => {
  const IsPar = props.index % 2;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.action(props.item, props.index)}>
        <FastImage
          style={[styles.item, !IsPar ? styles.itemPar : styles.itemImpar]}
          source={{uri: props.item.urls.regular}}>
          <FastImage
            style={styles.imageOpacity}
            source={require('../../assets/image/Rectangle.png')}>
            <Text numberOfLines={1} style={styles.textTitle}>
              {props.item.description || 'No avaliable description'}
            </Text>
            <Text numberOfLines={2} style={styles.textDescription}>
              {`${getRandomInt(1000)} votos`}
            </Text>
          </FastImage>
        </FastImage>
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemPar: {
    backgroundColor: 'red',
  },
  itemImpar: {
    backgroundColor: 'yellow',
    marginLeft: 10,
    marginTop: 20,
  },
  imageOpacity: {
    width: '100%',
    height: '30%',
    paddingTop: 20,
    paddingLeft: 10,
  },
  textTitle: {
    fontFamily: 'MuseoSans-500',
    color: '#FFFFFF',
  },
  textDescription: {
    fontFamily: 'MuseoSans-500',
    color: '#FFFFFF',
    fontSize: 10,
    paddingTop: 5,
  },
  item: {
    width: 155,
    height: 218,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
});
