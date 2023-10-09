import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import HomeMap from './src/screens/HomeMap'

export default function App() {
  return (
     <>
      <StatusBar style="auto" />
      <HomeMap/>
      </>
  );
}


