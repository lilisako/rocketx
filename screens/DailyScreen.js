import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image, Platform, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';
import env from '../env';

export default class DailyScreen extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      description: '',
      date: '',
      title: '',
    };
  }

  getData = async () => {
    await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${env.API_KEY}`,
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
          image: json.url,
          description: json.explanation,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.highlight}>Astronomy picture of the day : </Text>
        <Text style={styles.highlightBlue}>{this.state.title}</Text>
        <View style={styles.content}>
        <Image style={styles.image} source={this.state.image ? { uri: this.state.image } : null}></Image>
        </View>
        <Text style={styles.highlight}>Explanation : </Text>
        <Text style={styles.highlightBlue}>{this.state.date}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

DailyScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'column',
    margin: 5,
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
  image: {
    aspectRatio: 2 / 3,
    width: '90%',
  },
});
