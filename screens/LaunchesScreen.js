import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, AppState,
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Card, ListItem, Button, Icon,
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

import { MonoText } from '../components/StyledText';

export default class LaunchesScreen extends Component {
  constructor() {
    super();
    this.state = {
      upcoming: [],
      past: [],
    };
  }

  getData = async () => {
    await fetch(
      'https://api.spacexdata.com/v3/launches/past?order=desc&limit=10',
      {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          past: json,
        });
      });
    /*
    await fetch(
      'https://api.spacexdata.com/v3/launches/upcoming?limit=5',
      {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          upcoming: json,
        });
      }); */
  }

  componentDidMount() {
    this.getData();
  }

  renderItem = ({ item }) => (
    <View style={styles.content}>
      <Text style={styles.highlight}>{item.mission_name}</Text>
      <View style={{ backgroundColor: 'black', alignContent: 'center' }}>
        <WebView
          style={ {
            marginTop: (Platform.OS == 'ios') ? 20 : 0, aspectRatio: 3 / 2, alignContent: 'center', width: '100%',
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${item.links.youtube_id}` }}
        />
      </View>
      <Text style={styles.description}>{item.details}</Text>
    </View>
  )

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        <Text style={styles.title}>Launches</Text>
        {/*
        <Text style={styles.highlight}>Upcoming Launches</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.upcoming}
          renderItem={this.renderItem}
        /> */}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.past}
          renderItem={this.renderItem}
        />
        </ScrollView>
      </View>
    );
  }
}

LaunchesScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
  },
  content: {
    // alignItems: 'center',
    flexDirection: 'column',
    margin: 5,
  },
  list: {
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
    color: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
    color: 'white',
  },
  highlight: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    color: '#E7CB25',
  },
  highlightBlue: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
    color: Colors.blue,
  },
  description: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 20,
    color: 'white',
  },
  largedescription: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 20,
    color: 'white',
  },
});
