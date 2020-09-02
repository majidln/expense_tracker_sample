import React, { useState } from 'react';
import {
  StyleSheet, View, TouchableOpacity, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import { withTheme } from '../providers/ThemeProviders';
import IonicIcon from './Icon';
import Label from './Label';
import { isIphoneX } from '../utils/device';

// data: get a list of item to show in select box as a modal
// value: get selected itemText, itemValue
function SelectInput(props) {
  const [visible, setVisible] = useState(false);

  const {
    onSelect, value, itemValue, data, label, error, placeholder, theme, onBlur
  } = props;

  const onSelectItem = (item) => {
    closeModal();
    onSelect(item);
  };

  const closeModal = () => {
    setVisible(false);
    // simulate blur event for select box
    if (onBlur) {
      onBlur();
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemWrapper} onPress={() => onSelectItem(item)}>
      <Label style={styles.item}>{item.title}</Label>
    </TouchableOpacity>
  );

  const renderItemSeperator = () => (
    <View style={{ height: 1, backgroundColor: 'lightgray' }} />
  );

  return (
    <View style={styles.wrapper}>
      {label && <Label style={styles.label}>{label}</Label>}
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={[styles.input, { backgroundColor: theme.inputBg }]}
      >
        {value[itemValue] ? <Label style={styles.value}>{value[itemValue]}</Label>
          : <Label style={styles.placeholder}>{placeholder}</Label>}
        <IonicIcon style={styles.optionIcon} name="chevron-down-outline" size={28} color="gray" />
      </TouchableOpacity>
      {error && <Label style={styles.error}>{error}</Label>}
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onBackdropPress={() => closeModal()}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <View style={[styles.centeredView, { paddingBottom: isIphoneX() ? 45 : 10 }]}>
          <View>
            <View style={styles.modalTitleWrapper}>
              <Label style={styles.modalTitle}>{label}</Label>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => closeModal()}
              >
                <IonicIcon name="md-close" color="white" size={25} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={data || []}
              renderItem={(row) => renderItem(row)}
              ItemSeparatorComponent={() => renderItemSeperator()}
              keyExtractor={(row) => `${row.id}`}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'left'
  },
  value: {
    fontSize: 16
  },
  placeholder: {
    color: 'gray',
    fontSize: 16
  },
  input: {
    height: 50,
    borderColor: 'lightgray',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  error: {
    color: 'red',
    fontSize: 14
  },
  optionIcon: {
    position: 'absolute',
    right: 5,
    top: 10
  },
  centeredView: {
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  itemWrapper: {
    width: '100%',
    padding: 16,
  },
  item: {
    textAlign: 'left',
    fontSize: 16
  },
  modalTitleWrapper: {
    backgroundColor: '#22a6b3',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    color: 'white',
  },
  closeBtn: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
});

SelectInput.defaultProps = {
  value: {},
  data: {},
  itemValue: 'title',
  itemId: 'id',
  label: '',
  onSelect: () => {},
};

export default withTheme(SelectInput);
