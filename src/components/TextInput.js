import React from 'react';
import {
  TextInput as EditText, StyleSheet, View, Text
} from 'react-native';

function TextInput(props) {
  const {
    onChangeText, value, label, style, ...other
  } = props;
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <EditText
        {...other}
        style={[styles.input, style]}
        onChangeText={(text) => onChangeText && onChangeText(text)}
        value={value}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        textAlign: 'left'
    },
  input: {
    height: 50, backgroundColor: 'white', borderColor: 'lightgray', padding: 14, borderRadius: 8, borderWidth: 1, fontSize: 18
  }
});

export default TextInput;
