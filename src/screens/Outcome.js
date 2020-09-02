import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { withTheme } from '../providers/ThemeProviders';
import { addOutcome } from '../state/outcome/actions';
import {
  TextInput, Button, CategorySelect, TypeSelect
} from '../components';

function OutcomeScreen({ theme, createNewIncom, outcome }) {
  const { t } = useTranslation();

  const initialValues = {
    amount: '',
    category: {},
    type: {},
    description: '',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          createNewIncom({ outcome: values });
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
          setFieldValue,
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
                error={errors.amount}
              />
              <CategorySelect
                type="outcome"
                label={t('outcome.category')}
                placeholder={t('outcome.categoryPlaceholder')}
                onSelect={(cat) => setFieldValue('category', cat)}
                value={values.category}
                error={errors.category}
              />
              <TypeSelect
                label={t('outcome.type')}
                placeholder={t('outcome.typePlaceholder')}
                onSelect={(type) => setFieldValue('type', type)}
                value={values.type}
                error={errors.type}
              />
              <TextInput
                placeholder={t('outcome.descriptionPlaceholder')}
                label={t('outcome.description')}
                value={values.description}
                onChangeText={(text) => setFieldValue('description', text)}
                error={errors.description}
              />
            </KeyboardAwareScrollView>
            <Button label={t('outcome.submit')} onPress={() => handleSubmit()} loading={outcome.adding} />
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
    outcome: state.outcome
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewIncom: (outcome) => dispatch(addOutcome(outcome))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(OutcomeScreen));
