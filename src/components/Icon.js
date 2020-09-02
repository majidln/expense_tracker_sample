import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

function IonicIcon({
  name, size, color, ...other
}) {
  return (
    <Icon name={name} size={size} color={color} {...other} />
  );
}

IonicIcon.defaultProps = {
  name: '',
  color: 'gray',
  size: 28
};

export default IonicIcon;
