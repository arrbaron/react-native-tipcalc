import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Header, Left, Right, Body, Title } from 'native-base';

const Head = () => (
  <Header style={styles.header}>
    <Left />
    <Body>
      <Title>Header</Title>
    </Body>
    <Right />
  </Header>
);

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
});

export default Head;
