import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from '../components';

function IncomeScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder={'Please enter type'} label={'Type:'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  }
});

export default IncomeScreen;
