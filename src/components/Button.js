import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withTheme } from '../providers/ThemeProviders';

function Button({
  label, onPress, style, bgColor, color, theme
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor: bgColor || theme.mainButton }]}
      onPress={() => onPress && onPress()}
    >
      <Text style={[styles.label, { color: color || 'white' }]}>{label}</Text>
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
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  }
});
export default withTheme(Button);
