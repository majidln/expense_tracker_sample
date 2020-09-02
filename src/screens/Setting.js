import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Label } from '../components';
import { withTheme } from '../providers/ThemeProviders';

function SettingScreen({ theme, themeID, switchTheme }) {
  const { t } = useTranslation();
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View>
        <Button
          onPress={() => switchTheme()}
          label={t(`setting.theme.to.${themeID === 'light' ? 'dark' : 'light'}`)}
          bgColor={theme.switchThemeButtonBg}
          color={theme.switchThemeButton}
        />
      </View>
      <View style={styles.languageWrapper}>
        <Label style={styles.switchLanguageText}>
          {t('setting.language.title')}
        </Label>
        <View style={styles.switchLanugeWrapper}>
          <Button
            style={styles.enButton}
            onPress={() => { locale = 'en'; }}
            label={t('setting.language.en')}
          />
          <Button
            style={styles.faButton}
            onPress={() => { locale = 'fa'; }}
            label={t('setting.language.fa')}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  languageWrapper: {
    marginTop: 20
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
