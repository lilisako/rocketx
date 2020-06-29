import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, AppState,
} from 'react-native';
import {
  Card, ListItem, Button, Icon,
} from 'react-native-elements';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default class NewsScreen extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  getData = async () => {
    await fetch(
      'https://spaceflightnewsapi.net/api/v1/articles',
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
          news: json,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  renderItem = ({ item }) => (
    <View>
    <ListItem
      title={item.title}
      subtitle={item.published_date}
      titleStyle={{ color: 'white', fontWeight: 'bold' }}
      subtitleStyle={{ color: '#E7CB25' }}
      leftAvatar={{ source: item.featured_image ? { uri: item.featured_image } : null, size: 'xlarge', rounded: false }}
      bottomDivider
      chevron
      containerStyle={styles.list}
    />
    </View>
  )

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        <Text style={styles.title}>News</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.news.docs}
          renderItem={this.renderItem}
        />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
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
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 20,
    color: '#E7CB25',
  },
  highlightBlue: {
    fontSize: 20,
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
});
