import React from 'react';
import {
  TextInput as EditText, StyleSheet, View, Text
} from 'react-native';

function TextInput(props) {
  const {
    onChangeText, value, label, error, style, ...other
  } = props;
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <EditText
        {...other}
        style={[styles.input, style]}
        onChangeText={(text) => onChangeText && onChangeText(text)}
        value={value}
      />
      {error && <Text style={styles.error}>{error}</Text>}
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
    backgroundColor: 'white',
    borderColor: 'lightgray',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 18
  },
  error: {
    color: 'red',
    fontSize: 14
  }
});

export default TextInput;
