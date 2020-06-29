import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image, Platform, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

import { MonoText } from '../components/StyledText';

export default function MarsWheatherServiceScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Mars Wheather</Text>
      </ScrollView>
    </View>
  );
}

MarsWheatherServiceScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
    color: 'white',
  },
});
