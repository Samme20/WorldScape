//Import React
import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
//Import Expo
import { StatusBar } from "expo-status-bar";
//Import Files
import stylesd from "../assets/stylesheets/Styles-darkold";
import stylesl from "../assets/stylesheets/Styles-lightold";
import GeoLocator from "../scripts/GeoLocator";
import MapAPI from "../scripts/MapAPI";

// MAIN //
class MapTest extends Component {
  render() {
    return (
      <View style={stylesd.body}>
        <GeoLocator />
      </View>
    );
  }
}

// STYLES FOR SCREEN

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

export default MapTest;
