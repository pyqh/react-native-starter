import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Text,
  // Button,
  TextInput,
  StatusBar,
} from 'react-native';

//eduttext,toast
export default function App() {
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  return (
    <View>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: 'blue',
        }}
      >
        <Text style={{ fontSize: 30, margin: 10, color: '#f3f3f3' }}>
          文本框-按钮-编辑框-toast
        </Text>
      </View>
      <Text
        style={{ color: 'blue', ...styles.text }}
      >{`我本学霸一枚\n当年\n年轻时 意气风发`}</Text>
      <Button onPress={() => setStep1(true)}>原神,启动!</Button>
      {step1 && (
        <>
          <Text
            style={{ color: 'orange', ...styles.text }}
          >{`糊涂两年\n有点迷茫\n...\n偶遇 清哥`}</Text>
          <Button onPress={() => setStep2(true)}>立即改变</Button>
          {step2 && (
            <>
              <Text
                style={{ color: 'blue', ...styles.text }}
              >{`我卸载了王者,我卸载了吃鸡\n我披星戴月\n...\n后面忘了...`}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 15 }}>立下flag:</Text>
                <TextInput
                  style={{ margin: 10, fontSize: 20 }}
                  placeholder="写下今天的诺言,腾飞!"
                />
                <Button onPress={showToast}>click!</Button>
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
}
const Button = ({ onPress, children }) => {
  return (
    <View style={{ alignSelf: 'flex-start' }}>
      <TouchableOpacity style={{}} onPress={onPress}>
        <Text style={{ padding: 5, fontSize: 25, backgroundColor: 'grey' }}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
const showToast = () => {
  ToastAndroid.show('芜湖,起飞', ToastAndroid.LONG);
};
