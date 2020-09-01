import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { withTheme } from '../providers/ThemeProviders';
import I18n from '../services/i18n';

Icon.loadFont();

function MainScreen({ theme, navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text styles={{ color: theme.primaryText }}>
        {I18n.t('greeting')}
      </Text>
      <ActionButton buttonColor={theme.floatingMenu}>
        <ActionButton.Item buttonColor={theme.income} title={I18n.t('floatingMenu.income')} onPress={() => navigation.navigate('Income')}>
          <Icon name="md-add" color="white" size={25} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor={theme.expense} title={I18n.t('floatingMenu.outcome')} onPress={() => navigation.navigate('Outcome')}>
          <Icon name="md-remove" color="white" size={25} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(MainScreen);
