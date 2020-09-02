import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme } from '../providers/ThemeProviders';
import Loading from './Loading';
import Label from './Label';

function Button({
  label, onPress, style, bgColor, color, theme, loading
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor: bgColor || theme.mainButton }]}
      onPress={() => onPress && !loading && onPress()}
    >
      {!loading
        ? <Label style={{ ...styles.label, ...{ color } }}>{label}</Label>
        : <Loading />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: 'lightgray',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  }
});

Button.defaultProps = {
  label: '',
  loading: false,
  onPress: () => {},
  color: 'white'
};

export default withTheme(Button);
