import React from 'react';
import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { withTheme } from '../providers/ThemeProviders';
import { addOutcome } from '../state/outcome/actions';
import {
  TextInput, Button, CategorySelect, TypeSelect
} from '../components';

function OutcomeScreen({
  theme, createNewIncom, outcome, navigation
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
            outcome: values,
            callback: () => {
              Alert.alert('', t('outcome.added'), '');
              navigation.goBack();
            }
          });
        }}
        validate={(values) => {
          const errors = {};
          if (!values.amount) {
            errors.amount = t('outcome.errors.amount');
          } else if (isNaN(values.amount)) {
            errors.amount = t('outcome.errors.amountFormat');
          }
          if (!(values.category && values.category.id)) {
            errors.category = t('outcome.errors.category');
          }
          if (!(values.type && values.type.id)) {
            errors.type = t('outcome.errors.type');
          }
          if (!values.description) {
            errors.description = t('outcome.errors.description');
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
                placeholder={t('outcome.amountPlaceholder')}
                label={t('outcome.amount')}
                value={values.amount}
                onChangeText={(text) => setFieldValue('amount', text)}
                keyboardType="numeric"
                error={touched.amount && errors.amount}
                onBlur={() => setFieldTouched('amount')}
              />
              <CategorySelect
                type="outcome"
                label={t('outcome.category')}
                placeholder={t('outcome.categoryPlaceholder')}
                onSelect={(cat) => setFieldValue('category', cat)}
                value={values.category}
                error={touched.category && errors.category}
                onBlur={() => setFieldTouched('category')}
              />
              <TypeSelect
                label={t('outcome.type')}
                placeholder={t('outcome.typePlaceholder')}
                onSelect={(type) => setFieldValue('type', type)}
                error={touched.type && errors.type}
                onBlur={() => setFieldTouched('type')}
              />
              <TextInput
                placeholder={t('outcome.descriptionPlaceholder')}
                label={t('outcome.description')}
                value={values.description}
                onChangeText={(text) => setFieldValue('description', text)}
                error={touched.description && errors.description}
                onBlur={() => setFieldTouched('description')}
              />
            </KeyboardAwareScrollView>
            <Button label={t('outcome.submit')} onPress={() => handleSubmit()} loading={outcome.adding} />
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
    outcome: state.outcome
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewIncom: (outcome) => dispatch(addOutcome(outcome))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(OutcomeScreen));
