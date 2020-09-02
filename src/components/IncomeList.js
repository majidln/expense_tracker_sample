import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Label from './Label';
import Button from './Button';

function IncomeList({ incomes }) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const renderItem = (item, index) => (
    <View style={styles.itemWrapper} key={index}>
      <Label style={styles.amount}>
        {item.amount}
        $
      </Label>
      <Label style={styles.category}>
        {`${t('income.category')}: ${item.category.title}` }
      </Label>
      <Label style={styles.type}>
        {`${t('income.type')}: ${item.type.title}` }
      </Label>
      <Label style={styles.description} numberOfLines={1}>{item.description}</Label>
      {item.created
        && <Label style={styles.created} numberOfLines={1}>{item.created}</Label>}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {incomes.map((income, index) => renderItem(income, index))}
      {incomes.length === 0
        && (
        <View>
          <Label style={styles.empty}>{t('income.empty')}</Label>
          <Button
            onPress={() => navigation.navigate('Income')}
            label={t('income.addNew')}
            name="add-circle-outline"
          />
        </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10
  },
  itemWrapper: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 10
  },
  empty: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27ae60',
    textAlign: 'center'
  },
  type: {
    fontSize: 16,
  },
  category: {
    fontSize: 16,
  },
  created: {
    textAlign: 'right'
  }
});

export default IncomeList;
