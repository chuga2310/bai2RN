import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity} from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>ID</Text>
          <Text style={{ flex: 3 }}>Name</Text>
          <Text style={{ flex: 1 }}>Age</Text>
          <Text style={{ flex: 2 }}>Address</Text>
          <Text style={{ flex: 1 }}></Text>
        </View>
        <FlatList data={this.props.data}
          renderItem={(item) =>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ flex: 1 }}>{item.id}</Text>
              <Text style={{ flex: 3 }}>{item.name}</Text>
              <Text style={{ flex: 1 }}>{item.age}</Text>
              <Text style={{ flex: 2 }}>{item.address}</Text>
              <TouchableOpacity style={{ flex: 1 }}>
                
              </TouchableOpacity>
            </View>}
        />
      </View>
    );
  }
}
