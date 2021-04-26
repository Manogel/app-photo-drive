import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Camera from 'screens/Camera';
import Collage from 'screens/Collage';

const Tab = createBottomTabNavigator();

const BottomTabNav: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Collage" component={Collage} />
      <Tab.Screen name="Camera" component={Camera} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
