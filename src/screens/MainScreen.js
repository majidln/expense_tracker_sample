import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { withTheme } from '../providers/ThemeProviders';
import { Label } from '../components';

Icon.loadFont();

function MainScreen({ theme, navigation }) {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Label styles={{ color: theme.primaryText }}>
        {t('greeting')}
      </Label>
      <ActionButton buttonColor={theme.floatingMenu}>
        <ActionButton.Item buttonColor={theme.income} title={t('floatingMenu.income')} onPress={() => navigation.navigate('Income')}>
          <Icon name="md-add" color="white" size={25} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor={theme.expense} title={t('floatingMenu.outcome')} onPress={() => navigation.navigate('Outcome')}>
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
