import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Dimensions
} from "react-native";
import { Icon } from "native-base";
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";

import Confetti from "react-native-confetti";

var height = Dimensions.get("window").height;

export default class HomeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      text: ""
    };
  }
  handleSubmit = () => {
    Keyboard.dismiss();
    const stitchAppClient = Stitch.defaultAppClient;
    const mongoClient = stitchAppClient.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    const db = mongoClient.db("elk");
    const tasks = db.collection("elk-tasks");
    if (this.state.text != "") {
      tasks
        .insertOne({
          status: "new",
          description: this.state.text,
          date: new Date()
        })
        .then(() => {
          if (this._confettiView) {
            this._confettiView.startConfetti();
          }
          this.setState({ value: !this.state.value });
          this.setState({ text: "" });
        })
        .catch(err => {
          console.warn(err);
        });
    }
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Confetti
          confettiCount={50}
          timeout={10}
          duration={2000}
          ref={node => (this._confettiView = node)}
        />
        <TextInput
          style={{
            color: "gray",
            fontSize: 20,
            marginTop: height / 2 - 60
          }}
          placeholder="Enter Task..."
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={() => this.handleSubmit()}
        />
        <TouchableOpacity onPress={() => this.handleSubmit()}>
        <Icon active name="ios-add-circle" style={{ color: '#4863A0', fontSize : 45 }}/>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});