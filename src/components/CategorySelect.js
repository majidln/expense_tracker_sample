import React, { useEffect } from 'react';
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
