import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import {
  TextInput, Button, CategorySelect
} from '../components';
import I18n from '../services/i18n';

function IncomeScreen() {
  const initialValues = {
    amount: '',
    type: {},
    category: {},
    description: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.amount) {
            errors.amount = I18n.t('income.errors.amount');
          }
          if (!(values.category && values.category.id)) {
            errors.category = I18n.t('income.errors.category');
          }
          if (!values.description) {
            errors.description = I18n.t('income.errors.description');
          }
          console.log('validation', values, errors)
          return errors;
        }}
      >
        {({
          values,
          errors,
          setFieldValue,
          handleSubmit
        }) => (
          <View style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.formScroll}>
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
              <TextInput
                placeholder={I18n.t('income.descriptionPlaceholder')}
                label={I18n.t('income.description')}
                value={values.description}
                onChangeText={(text) => setFieldValue('description', text)}
                error={errors.description}
              />
            </KeyboardAwareScrollView>
            <Button label={I18n.t('income.submit')} onPress={handleSubmit} />
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

export default IncomeScreen;
