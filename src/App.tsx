import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import BottomTabNav from 'routes/BottomTabNav';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default App;
