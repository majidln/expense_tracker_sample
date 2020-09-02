import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getStatistics } from '../state/statistics/actions';
import { getIncomes } from '../state/income/actions';
import { withTheme } from '../providers/ThemeProviders';
import { StatisticBox, ExpenseList, IonicIcon } from '../components';

function MainScreen({
  theme, navigation, statistics, getAllStatistics, fetchIncomeList, incomes, outcomes
}) {
  const { t } = useTranslation();

  useEffect(() => {
    // fetch stattiscs
    getAllStatistics();
    // fetch incomes list
    fetchIncomeList();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <ScrollView style={styles.scrollWrapper}>
        <View style={styles.contentWrapper}>
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
          <View>
            <ExpenseList type="income" list={incomes} addNewPress={() => navigation.navigate('Income')} color="#27ae60" />
            <ExpenseList type="outcome" list={outcomes} addNewPress={() => navigation.navigate('Outcome')} color="#c0392b" />
          </View>
        </View>
      </ScrollView>
      <ActionButton buttonColor={theme.floatingMenu}>
        <ActionButton.Item buttonColor={theme.income} title={t('floatingMenu.income')} onPress={() => navigation.navigate('Income')}>
          <IonicIcon name="md-add" color="white" size={25} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor={theme.expense} title={t('floatingMenu.outcome')} onPress={() => navigation.navigate('Outcome')}>
          <IonicIcon name="md-remove" color="white" size={25} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollWrapper: {
    flex: 1,
    padding: 8
  },
  contentWrapper: {
    flex: 1
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
    statistics: state.statistics,
    incomes: state.income.list,
    incomeFetching: state.income.fetching,
    outcomes: state.outcome.list,
    outcomeFetching: state.outcome.fetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllStatistics: () => dispatch(getStatistics()),
    fetchIncomeList: () => dispatch(getIncomes())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(MainScreen));
