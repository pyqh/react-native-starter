import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
class ComLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello world',
      isShow: true,
    };
    console.log();

    console.log('constructor 构造函数', 1);
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount  组件将要渲染', 2);
  }

  componentDidMount() {
    console.log('componentDidMount 组件渲染完毕', 4);
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate 组件将要更新', 5);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 组件更新完毕', 6);
  }

  render() {
    console.log('render渲染函数', 3);
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => {
            this.setState({ msg: 'hello hello' });
          }}
          style={styles.btn}
        >
          <Text style={{ fontSize: 25 }}>change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ isShow: !this.state.isShow });
          }}
          style={styles.btn}
        >
          <Text style={{ fontSize: 25 }}>
            {this.state.isShow ? 'show' : 'hide'}
          </Text>
        </TouchableOpacity>
        {this.state.isShow && <ShowTxt msg={this.state.msg} />}
      </View>
    );
  }
}
class ShowTxt extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps 组件将要接收新的state和props', 8);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 组件将要移除', 7);
  }
  render() {
    return <Text>{this.props.msg}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ComLife;
