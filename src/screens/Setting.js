import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Label } from '../components';
import { withTheme } from '../providers/ThemeProviders';
import I18n from '../services/i18n';

function SettingScreen({ theme, themeID, switchTheme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View>
        <Button
          onPress={() => switchTheme()}
          label={I18n.t(`setting.theme.to.${themeID === 'light' ? 'dark' : 'light'}`)}
          bgColor={theme.switchThemeButtonBg}
          color={theme.switchThemeButton}
        />
      </View>
      <View style={styles.languageWrapper}>
        <Label style={styles.switchLanguageText}>
          {I18n.t('setting.language.title')}
        </Label>
        <View style={styles.switchLanugeWrapper}>
          <Button
            style={styles.enButton}
            onPress={() => { I18n.locale = 'en'; }}
            label={I18n.t('setting.language.en')}
          />
          <Button
            style={styles.faButton}
            onPress={() => { I18n.locale = 'fa'; }}
            label={I18n.t('setting.language.fa')}
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
