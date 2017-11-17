import React, {Component} from 'react';
import {AppRegistry, FlatList, Text, View, ListView, StyleSheet} from 'react-native';

export default class Component5 extends Component {
  state = {
    data: [],
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async() => {
    const response = await fetch('https://randomuser.me/api?results=10');
    const json = await response.json();
    this.setState({data: json.results});
  }

  render(){
    return(
      <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
          <Text>
            {`${item.name.first} ${item.name.last}`}
          </Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding:10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },

  rowText: {
    flex:1
  }
});
