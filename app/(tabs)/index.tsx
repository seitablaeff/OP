import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import MyFilesScreen from './myfiles';
import EpubViewer from '@/app/EpubViewer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen name="Библиотека" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyFiles" component={MyFilesScreen} />
        {/* Передача filePath в качестве параметра маршрута */}
        <Stack.Screen name="EpubViewer" component={EpubViewer} initialParams={{ filePath: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}