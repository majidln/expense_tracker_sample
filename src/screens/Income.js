import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { TextInput, SelectInput, Button } from '../components';
import I18n from '../services/i18n';

function IncomeScreen() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const initialValues = {
    amount: 0,
    type: {},
    category: {},
    description: '',
    time: ''
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
      >
        {({
          values,
          setFieldValue
          /* and other goodies */
        }) => (
          <View style={styles.formWrapper}>
            <KeyboardAwareScrollView style={styles.formScroll}>
              <SelectInput
                label={I18n.t('income.category')}
                placeholder={I18n.t('income.categoryPlaceholder')}
                data={DATA}
                onSelect={(cat) => setFieldValue('category', cat)}
                value={values.category}
              />
              <TextInput
                placeholder={I18n.t('income.descriptionPlaceholder')}
                label={I18n.t('income.description')}
                value={values.description}
                onChangeText={(text) => setFieldValue('description', text)}
              />

            </KeyboardAwareScrollView>
            <Button label={I18n.t('income.submit')} />
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
