import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getCategory } from '../state/category/actions';
import SelectInput from './SelectInput';

function CategorySelect({
  type, getCategories, categories, ...other
}) {
  useEffect(() => {
    getCategories(type);
  }, []);

  return (
    <SelectInput
      {...other}
      data={categories[type].list}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: (key) => dispatch(getCategory(key))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelect);
