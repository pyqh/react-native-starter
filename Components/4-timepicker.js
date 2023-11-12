import { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import RNDateTimeSelector from 'react-native-date-time-scroll-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function App() {
  const [timeValue, setTimeValue] = useState('08:25 AM');
  return (
    <View>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: 'blue',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            margin: 10,
            color: '#f3f3f3',
          }}
        >
          TimePicker
        </Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 30,
            marginTop: 30,
          }}
        >
          pick the time and press sava button
        </Text>
      </View>
      <View>
        <TimePicker setTimeValue={setTimeValue} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button title="save"></Button>
        <Text style={{ fontSize: 30, alignSelf: 'flex-start', marginLeft: 80 }}>
          the time is:
        </Text>
        <Text style={{ fontSize: 30 }}>{timeValue}</Text>
      </View>
    </View>
  );
}
function TimePicker({ setTimeValue }) {
  // const  = props.setTimeValue;
  const borderWidth = 25;
  const setTimerWidthHeight = wp(75);
  const selectedItemTextSize = 25;
  const wrapperHeight = setTimerWidthHeight - borderWidth * 2;

  const addZeroToDigits = (digit) => {
    if (digit) {
      let zeroAdded = `0${digit}`;
      return zeroAdded.substring(zeroAdded.length - 2);
    } else {
      return `00`;
    }
  };

  const dataSet = {
    data: {
      firstColumn: [...Array(13).keys()].map((item, idx) => {
        return { value: addZeroToDigits(item), index: idx };
      }),
      secondColumn: [...Array(60).keys()].map((item, idx) => {
        return { value: addZeroToDigits(item), index: idx };
      }),
      thirdColumn: [
        { value: 'AM', index: 0 },
        { value: 'PM', index: 1 },
      ],
    },
    initials: [8, 25, 0],
  };
  const seperatorComponentRendererOne = () => {
    return (
      <Text
        style={{
          fontSize: selectedItemTextSize,
          lineHeight: setTimerWidthHeight * 0.15,
        }}
      >
        :
      </Text>
    );
  };
  const seperatorComponentRendererTwo = () => {
    return (
      <Text
        style={{
          fontSize: selectedItemTextSize,
          lineHeight: setTimerWidthHeight * 0.15,
        }}
      ></Text>
    );
  };

  return (
    <RNDateTimeSelector
      dataSet={dataSet}
      onValueChange={(data) => {
        setTimeValue(data[0].value + ':' + data[1].value + ' ' + data[2].value);
      }}
      containerStyle={{
        alignSelf: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 0,
        height: wp(65.5),
      }}
      firstSeperatorComponent={seperatorComponentRendererOne}
      secondSeperatorComponent={seperatorComponentRendererTwo}
      scrollPickerOptions={{
        itemHeight: 40,
        wrapperHeight: wrapperHeight,
        wrapperColor: 'rgba(0,0,0,0)',
        highlightColor: 'rgba(0,0,0,0.9)',
      }}
      textStyle={{
        fontSize: selectedItemTextSize,
        fontFamily: null,
      }}
      textColor={{
        primary: 'rgba(0,0,0,1.0)',
        secondary: 'rgba(0,0,0,0.5)',
        other: 'rgba(0,0,0,0.15)',
      }}
    />
  );
}
