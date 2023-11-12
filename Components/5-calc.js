import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

const Row = ({ children }) => {
  return <View style={{ flexDirection: 'row' }}>{children}</View>;
};
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const Button = ({ onPress, text, size }) => {
  const buttonStyles = [ButtonStyles.button];
  const textStyles = [ButtonStyles.text];
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};
const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case '+':
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case '-':
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case '*':
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case '/':
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'clear':
      return initialState;
    case 'back':
      return {
        currentValue: parseFloat(state.currentValue.toString().slice(0, -1)),
      };
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      };
    case 'equal':
      return handleEqual(state);
    default:
      return state;
  }
};

export default class App extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView style={{ marginTop: 240 }}>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button text="回退" onPress={() => this.HandleTap('back')} />
            <Button text="清空" onPress={() => this.HandleTap('clear')} />
          </Row>

          <Row>
            <Button text="+" onPress={() => this.HandleTap('operator', '+')} />
            <Button text="1" onPress={() => this.HandleTap('number', 1)} />
            <Button text="2" onPress={() => this.HandleTap('number', 2)} />
            <Button text="3" onPress={() => this.HandleTap('number', 3)} />
          </Row>
          <Row>
            <Button text="-" onPress={() => this.HandleTap('operator', '-')} />
            <Button text="5" onPress={() => this.HandleTap('number', 5)} />
            <Button text="6" onPress={() => this.HandleTap('number', 6)} />
            <Button text="7" onPress={() => this.HandleTap('number', 7)} />
          </Row>
          <Row>
            <Button text="*" onPress={() => this.HandleTap('operator', '*')} />
            <Button text="7" onPress={() => this.HandleTap('number', 7)} />
            <Button text="8" onPress={() => this.HandleTap('number', 8)} />
            <Button text="9" onPress={() => this.HandleTap('number', 9)} />
          </Row>
          <Row>
            <Button text="/" onPress={() => this.HandleTap('operator', '/')} />
            <Button text="." onPress={() => this.HandleTap('number', '.')} />
            <Button text="0" onPress={() => this.HandleTap('number', 0)} />
            <Button text="=" onPress={() => this.HandleTap('equal', '=')} />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 20,
  },
  value: {
    color: '#080808',
    backgroundColor: '#868686',
    fontSize: 42,
    textAlign: 'right',
    marginHorizontal: 5,
    marginBottom: 10,
    height: 100,
    lineHeight: 100,
    paddingRight: 10,
    justifyContent: 'center',
  },
});
const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#b6b6b6',
    flex: 1,
    height: Math.floor(buttonWidth / 2),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});
