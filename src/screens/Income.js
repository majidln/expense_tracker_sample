import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { addIncome } from '../state/income/actions';
import {
  TextInput, Button, CategorySelect, TypeSelect
} from '../components';
import I18n from '../services/i18n';

function IncomeScreen({ createNewIncom, income }) {
  console.log('income', income)
  const initialValues = {
    amount: '',
    category: {},
    type: {},
    description: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createNewIncom(values)
        }}
        validate={(values) => {
          const errors = {};
          if (!values.amount) {
            errors.amount = I18n.t('income.errors.amount');
          } else if (isNaN(values.amount)) {
            errors.amount = I18n.t('income.errors.amountFormat');
          }
          if (!(values.category && values.category.id)) {
            errors.category = I18n.t('income.errors.category');
          }
          if (!(values.type && values.type.id)) {
            errors.type = I18n.t('income.errors.type');
          }
          if (!values.description) {
            errors.description = I18n.t('income.errors.description');
          }
          return errors;
        }}
      >
        {({
          values,
          errors,
          setFieldValue,
          handleSubmit,
        }) => (
          <View style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.formScroll} keyboardShouldPersistTaps="handled">
              <TextInput
                placeholder={I18n.t('income.amountPlaceholder')}
                label={I18n.t('income.amount')}
                value={values.amount}
                onChangeText={(text) => setFieldValue('amount', text)}
                keyboardType="numeric"
                error={errors.amount}
              />
              <CategorySelect
                type="income"
                label={I18n.t('income.category')}
                placeholder={I18n.t('income.categoryPlaceholder')}
                onSelect={(cat) => setFieldValue('category', cat)}
                value={values.category}
                error={errors.category}
              />
              <TypeSelect
                label={I18n.t('income.type')}
                placeholder={I18n.t('income.typePlaceholder')}
                onSelect={(type) => setFieldValue('type', type)}
                value={values.type}
                error={errors.type}
              />
              <TextInput
                placeholder={I18n.t('income.descriptionPlaceholder')}
                label={I18n.t('income.description')}
                value={values.description}
                onChangeText={(text) => setFieldValue('description', text)}
                error={errors.description}
              />
            </KeyboardAwareScrollView>
            <Button label={I18n.t('income.submit')} onPress={() => handleSubmit()} loading={income.adding} />
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  formWrapper: {
    flex: 1
  },
  formScroll: {
    flex: 1
  }
});

function mapStateToProps(state) {
  return {
    income: state.income
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewIncom: (income) => dispatch(addIncome(income))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeScreen);
