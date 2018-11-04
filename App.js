import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Item from './component/ItemComponent';


export default class App extends Component {
  constructor(props) {
    super(props);
    data = [{ key: 0, name: 'abc', age: 12, address: '123' }]
    this.state = {
      key: 1,
      name: '',
      age: 0,
      address: '',
      data: data,
    };
  }
  _remove(index) {
    newData = this.state.data
    newData.splice(index, 1)
    this.setState({
      data: newData
    })
  }
  _onSubmit() {
    item = { key: this.state.key, name: this.state.name, age: this.state.age, address: this.state.address }
    newData = this.state.data
    newData.push(item)
    this.setState({
      data: newData,
      key: (this.state.key + 1),
      name: '',
      age: '',
      address: ''
    })
    console.log(this.state.data);
  }
  _clear() {
    this.setState({
      name: '',
      age: '',
      address: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: '80%',
            marginTop: 16,
            fontSize: 16,
          }}
          placeholder="Name"
          underlineColorAndroid="#ccc"
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: '80%',
            marginTop: 16,
            fontSize: 16,
          }}
          placeholder="Age"
          underlineColorAndroid="#ccc"
          onChangeText={(text) => {
            this.setState({ age: text });
          }}
          keyboardType='phone-pad'
          value={this.state.age}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: '80%',
            marginTop: 16,
            fontSize: 16,
          }}
          placeholder="Address"
          underlineColorAndroid="#ccc"
          onChangeText={(text) => {
            this.setState({ address: text });
          }}
          value={this.state.address}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '40%',
              borderRadius: 99099,
              height: 50,
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={()=>this._onSubmit()}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '40%',
              borderRadius: 99099,
              height: 50,
              marginTop: 16,
              alignItems: 'center',
              marginLeft: 8,
              justifyContent: 'center',
            }}
            onPress={() => this._clear()}
          >
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8, width: '100%', backgroundColor: 'skyblue', marginTop: 16 }}>
          <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 2 }}>
            <Text style={{ flex: 1, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>ID</Text>
            <Text style={{ flex: 3, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>Name</Text>
            <Text style={{ flex: 1, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>Age</Text>
            <Text style={{ flex: 2, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>Address</Text>
            <Text style={{ flex: 1, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}></Text>
          </View>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={({ item , index}) =>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Text style={{ flex: 1, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>{Number(item.key)}</Text>
                <Text style={{ flex: 3, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>{item.name}</Text>
                <Text style={{ flex: 1, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>{Number(item.age)}</Text>
                <Text style={{ flex: 2, textAlign: "center", borderLeftColor: 'black', borderLeftWidth: 2, fontSize: 16 }}>{item.address}</Text>
                <View style={{ flex: 1, borderLeftColor: 'black', borderLeftWidth: 2 }}>
                  <TouchableOpacity
                    onPress={() => this._remove(index)} >
                    <Text style={{ fontSize: 18, textAlign: "center", color: 'red' }}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>}
            keyExtractor={(item) => item.key.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
