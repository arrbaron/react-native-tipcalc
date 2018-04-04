import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Content } from 'native-base';
import Values from './Values';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      bill: '',
      tipPercent: 0.2,
    };
  }

  updateCustomTip(customTip) {
    if (customTip) {
      this.setState({ tipPercent: parseFloat(customTip) / 100 });
    } else {
      this.setState({ tipPercent: 0 });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Content style={styles.content}>
          <Values
            tipPercent={this.state.tipPercent}
            bill={this.state.bill}
          />
          <View style={styles.inputs}>
            <TextInput
              value={this.state.bill}
              style={styles.input}
              keyboardType="numeric"
              placeholder="0.00"
              underlineColorAndroid="white"
              placeholderTextColor="white"
              onChangeText={text => this.setState({ bill: text })}
            />
            <View style={styles.buttons}>
              <Button
                title="10%"
                onPress={() => this.setState({ tipPercent: 0.1 })}
              />
              <Button
                title="20%"
                onPress={() => this.setState({ tipPercent: 0.2 })}
              />
              <Button
                title="25%"
                onPress={() => this.setState({ tipPercent: 0.25 })}
              />
              <TextInput
                value={(this.state.tipPercent * 100).toString()}
                style={styles.customTip}
                keyboardType="numeric"
                placeholder="20%"
                underlineColorAndroid="white"
                placeholderTextColor="white"
                onChangeText={customTip => this.updateCustomTip(customTip)}
              />
            </View>
          </View>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
    color: 'white'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: 'white'
  },
  content: {
    width: '100%'
  }
});

export default Calculator;
