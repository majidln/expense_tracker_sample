import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Label from './Label';
import Button from './Button';

function ExpenseList({
  type, list, addNewPress, color
}) {
  const { t } = useTranslation();

  const renderItem = (item, index) => (
    <View style={styles.itemWrapper} key={index}>
      <Label style={{ ...styles.amount, ...{ color } }}>
        {item.amount}
        $
      </Label>
      { item.category && item.category.id
        && (
        <Label style={styles.category}>
          {`${t(`${type}.category`)}: ${item.category.title}` }
        </Label>
        )}
      {item.type && item.type.id
        && (
        <Label style={styles.type}>
          {`${t(`${type}.type`)}: ${item.type.title}` }
        </Label>
        )}
      <Label style={styles.description} numberOfLines={1}>{item.description}</Label>
      {item.created
        && <Label style={styles.created} numberOfLines={1}>{item.created}</Label>}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {list.map((income, index) => renderItem(income, index))}
      {list.length === 0
        && (
        <View>
          <Label style={styles.empty}>{t(`${type}.empty`)}</Label>
          <Button
            onPress={addNewPress}
            label={t(`${type}.addNew`)}
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

ExpenseList.defaultProps = {
  type: 'income'
};

export default ExpenseList;
