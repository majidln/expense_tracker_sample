import React from 'react';
import { StyleSheet } from 'react-native';
import Loader from 'react-native-spinkit';

function Loading({ color, type, size }) {
  return (
    <Loader style={styles.loader} color={color} type={type} size={size} />
  );
}
const styles = StyleSheet.create({
  loader: {
    backgroundColor: 'transparent',
  },
});

Loading.defaultProps = {
  type: 'ThreeBounce',
  color: 'white',
  size: 30
};

export default Loading;
