import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './App/Navigation/AppNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}
