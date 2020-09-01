import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTypes } from '../state/type/actions';
import SelectInput from './SelectInput';

function TypeSelect({
  fetchTypes, types, ...other
}) {
  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <SelectInput
      {...other}
      data={types.list}
    />
  );
}

function mapStateToProps(state) {
  return {
    types: state.types
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTypes: (key) => dispatch(getTypes(key))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeSelect);
