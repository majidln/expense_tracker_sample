import React from 'react';
import {
  TextInput as EditText, StyleSheet, View
} from 'react-native';
import Label from './Label';
import { withTheme } from '../providers/ThemeProviders';

function TextInput(props) {
  const {
    onChangeText, value, label, error, style, theme, ...other
  } = props;
  return (
    <View style={styles.wrapper}>
      {label && <Label style={styles.label}>{label}</Label>}
      <EditText
        {...other}
        style={[styles.input, style, { backgroundColor: theme.inputBg }]}
        onChangeText={(text) => onChangeText && onChangeText(text)}
        value={value}
      />
      {error && <Label style={styles.error}>{error}</Label>}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'left'
  },
  input: {
    height: 50,
    borderColor: 'lightgray',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16
  },
  error: {
    color: 'red',
    fontSize: 14
  }
});

export default withTheme(TextInput);
