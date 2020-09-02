import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Loading from './Loading';
import Icon from './Icon';
import Label from './Label';

function StatisticBox({
  style, icon, loading, statistics
}) {
  const { t } = useTranslation();
  return (
    <View style={[styles.wrapper, style]}>
      <Icon name={icon} color="white" size={45} />
      {statistics.today && (
        <Label style={styles.today}>
          {`${t('statistic.today')}: ${statistics.today}$`}
        </Label>
      )}
      {statistics.week && (
        <Label style={styles.other}>
          {`${t('statistic.week')}: ${statistics.week}$`}
        </Label>
      )}
      {statistics.month && (
        <Label style={styles.other}>
          {`${t('statistic.month')}: ${statistics.month}$`}
        </Label>
      )}
      {statistics.all && (
        <Label style={styles.all}>
          {`${t('statistic.all')}: ${statistics.all}$`}
        </Label>
      )}
      {loading && <Loading color="white" />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  today: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  other: {
    fontSize: 16,
    color: 'white'
  },
  all: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
});

StatisticBox.defaultProps = {
  loading: false,
  statistics: {}
};

export default StatisticBox;
