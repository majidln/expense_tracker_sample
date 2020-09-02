import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getStatistics } from '../state/statistics/actions';
import { withTheme } from '../providers/ThemeProviders';
import { StatisticBox } from '../components';

Icon.loadFont();

function MainScreen({
  theme, navigation, statistics, getAllStatistics
}) {
  const { t } = useTranslation();

  useEffect(() => {
    getAllStatistics();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.statisticWrapper}>
        <StatisticBox
          style={[styles.statisticBox, { backgroundColor: theme.incomeBox }]}
          loading={statistics.fetching}
          statistics={statistics.income}
          icon="add-circle-outline"
        />
        <StatisticBox
          style={[styles.statisticBox, { backgroundColor: theme.outcomeBox }]}
          loading={statistics.fetching}
          statistics={statistics.outcome}
          icon="remove-circle-outline"
        />
      </View>
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
    padding: 8
  },
  statisticWrapper: {
    flexDirection: 'row',
  },
  statisticBox: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  }
});

function mapStateToProps(state) {
  return {
    statistics: state.statistics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllStatistics: () => dispatch(getStatistics())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(MainScreen));
