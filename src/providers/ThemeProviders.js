import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import THEMES from '../assets/themes.json';

const STORAGE_KEY = 'THEME_ID';

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeID, setThemeID] = useState();

  useEffect(() => {
    (async () => {
      const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedThemeID) {
        setThemeID(storedThemeID);
      } else {
        setThemeID('light');
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {themeID ? children : null}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return (props) => {
    const { themeID, setThemeID } = useContext(ThemeContext);

    function changeTheme(id) {
      AsyncStorage.setItem(STORAGE_KEY, id);
      setThemeID(id);
    }

    const getTheme = (themeID) => THEMES[themeID];
    const switchTheme = () => {
      const newTheme = themeID === 'light' ? 'dark' : 'light';
      changeTheme(newTheme);
    };
    const setTheme = (key) => {
      changeTheme(key);
    };

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getTheme(themeID)}
        themeID={themeID}
        setTheme={setTheme}
        switchTheme={switchTheme}
      />
    );
  };
}
