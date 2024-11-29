import React from 'react';
import { StyleSheet, Pressable, Keyboard } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';

export default function App() {
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}>
      <Title/>
      <Form/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 80,
  },
});
