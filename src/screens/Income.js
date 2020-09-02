import React from 'react';
import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { addIncome } from '../state/income/actions';
import { withTheme } from '../providers/ThemeProviders';
import {
  TextInput, Button, CategorySelect, TypeSelect
} from '../components';

function IncomeScreen({
  theme, createNewIncom, income, navigation
}) {
  const { t } = useTranslation();

  const initialValues = {
    amount: '',
    category: {},
    type: {},
    description: '',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createNewIncom({
            income: values,
            callback: () => {
              Alert.alert('', t('income.added'), '');
              navigation.goBack();
            }
          });
        }}
        validate={(values) => {
          const errors = {};
          if (!values.amount) {
            errors.amount = t('income.errors.amount');
          } else if (isNaN(values.amount)) {
            errors.amount = t('income.errors.amountFormat');
          }
          if (!(values.category && values.category.id)) {
            errors.category = t('income.errors.category');
          }
          if (!(values.type && values.type.id)) {
            errors.type = t('income.errors.type');
          }
          if (!values.description) {
            errors.description = t('income.errors.description');
          }
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          handleSubmit,
        }) => (
          <View style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.formScroll} keyboardShouldPersistTaps="handled">
              <TextInput
                placeholder={t('income.amountPlaceholder')}
                label={t('income.amount')}
                value={values.amount}
                onChangeText={(text) => setFieldValue('amount', text)}
                keyboardType="numeric"
                error={touched.amount && errors.amount}
                onBlur={() => setFieldTouched('amount')}
              />
              <CategorySelect
                type="income"
                label={t('income.category')}
                placeholder={t('income.categoryPlaceholder')}
                onSelect={(cat) => setFieldValue('category', cat)}
                value={values.category}
                error={touched.category && errors.category}
                onBlur={() => setFieldTouched('category')}
              />
              <TypeSelect
                label={t('income.type')}
                placeholder={t('income.typePlaceholder')}
                onSelect={(type) => setFieldValue('type', type)}
                value={values.type}
                error={touched.type && errors.type}
                onBlur={() => setFieldTouched('type')}
              />
              <TextInput
                placeholder={t('income.descriptionPlaceholder')}
                label={t('income.description')}
                value={values.description}
                onChangeText={(text) => setFieldValue('description', text)}
                error={touched.description && errors.description}
                onBlur={() => setFieldTouched('description')}
              />
            </KeyboardAwareScrollView>
            <Button label={t('income.submit')} onPress={() => handleSubmit()} loading={income.adding} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(IncomeScreen));
