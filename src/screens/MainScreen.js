import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from '../providers/ThemeProviders';

function MainScreen({ theme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text styles={{ color: theme.primaryText }}>Main Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withTheme(MainScreen);
