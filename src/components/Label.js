import React from 'react';
import { Text } from 'react-native';
import { withTheme } from '../providers/ThemeProviders';

function Label({
  theme, style, children, ...other
}) {
  return (
    <Text {...other} style={{ color: theme.text, ...style }}>
      {children}
    </Text>
  );
}

export default withTheme(Label);
