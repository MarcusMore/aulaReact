import React from 'react';
import {SafeAreaView,StatusBar } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView >
      <StatusBar></StatusBar>
      <Cesta></Cesta>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
