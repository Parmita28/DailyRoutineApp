import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     location: {}
    };
  }

  componentDidMount() {}

  render() {  
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
 }
});