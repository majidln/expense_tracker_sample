import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Label } from '../components';
import { withTheme } from '../providers/ThemeProviders';

function SettingScreen({ theme, themeID, switchTheme }) {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.languageWrapper}>
        <Label style={styles.switchLanguageText}>
          {t('setting.language.title')}
        </Label>
        <View style={styles.switchLanugeWrapper}>
          <Button
            style={styles.enButton}
            onPress={() => { i18n.changeLanguage('en'); }}
            label={t('setting.language.en')}
          />
          <Button
            style={styles.faButton}
            onPress={() => { i18n.changeLanguage('fa'); }}
            label={t('setting.language.fa')}
          />
        </View>
      </View>
      <View>
        <Button
          onPress={() => switchTheme()}
          label={t(`setting.theme.to.${themeID === 'light' ? 'dark' : 'light'}`)}
          bgColor={theme.switchThemeButtonBg}
          color={theme.switchThemeButton}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between'
  },
  languageWrapper: {
  },
  switchLanugeWrapper: {
    flexDirection: 'row'
  },
  switchLanguageText: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 8
  },
  enButton: {
    flex: 1,
    marginRight: 4
  },
  faButton: {
    flex: 1,
    marginLeft: 4
  }
});

export default withTheme(SettingScreen);
