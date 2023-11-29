import {
  FlatList,
  Linking,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

const screen = Dimensions.get('window');
const buttonWidth = (screen.width - 20) / 3;

const Row = ({ children }) => <View style={{ flexDirection: 'row' }}>{children}</View>;
const Button = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...style }}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
export default function App() {
  const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    const { data } = await Contacts.getContactsAsync();
    setData(data);
    setContacts(data);
  };

  const add = async () => {
    const contact = {
      [Contacts.Fields.ID]: id,
      [Contacts.Fields.Name]: name,
      [Contacts.Fields.PhoneNumbers]: number,
    };
    const contactId = await Contacts.addContactAsync(contact);
    console.log(contactId, 'log');
  };
  const Item = ({ item }) => {
    return (
      <Row>
        <Text style={{ ...styles.item, flex: 0, width: 30 }}>{item.id}</Text>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.phoneNumbers[0].number}</Text>
      </Row>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20, color: '#fff' }}>C0705:访问和修改系统通讯录数据</Text>
      </View>
      <View>
        <Row>
          <Text style={{ ...styles.item, backgroundColor: '#b6b6b6', flex: 0, width: 30 }}>id</Text>
          <Text style={{ ...styles.item, backgroundColor: '#b6b6b6' }}>姓名</Text>
          <Text style={{ ...styles.item, backgroundColor: '#b6b6b6' }}>电话</Text>
        </Row>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Row>
          <TextInput
            defaultValue={id}
            onChangeText={(val) => {
              setId(val);
              console.log(val);
            }}
            style={styles.input}
            underlineColorAndroid={'grey'}
            placeholder="id"
          />
          <TextInput
            defaultValue={name}
            onChangeText={(val) => {
              setName(val);
            }}
            style={styles.input}
            underlineColorAndroid={'grey'}
            placeholder="姓名"
          />
          <TextInput
            defaultValue={number}
            onChangeText={(val) => {
              setNumber(val);
            }}
            style={styles.input}
            underlineColorAndroid={'grey'}
            placeholder="电话"
          />
        </Row>
        <Row>
          <Button style={{ width: buttonWidth * 2 + 6 }} onPress={getContacts}>
            显示所有联系人
          </Button>
          <Button style={styles.button}>查询</Button>
        </Row>
        <Row>
          <Button onPress={add} style={styles.button}>
            添加
          </Button>
          <Button style={styles.button}>修改</Button>
          <Button style={styles.button}>删除</Button>
        </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 80,
    backgroundColor: '#008B8B',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    lineHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    borderColor: '#c1c1c1',
    borderWidth: 1,
  },
  button: {
    // flex: 1,
    height: 60,
    width: buttonWidth,
    backgroundColor: '#b6b6b6',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    fontSize: 16,
    margin: 3,
  },
  input: {
    flex: 1,
    margin: 3,
    fontSize: 16,
    height: 60,
  },
});
