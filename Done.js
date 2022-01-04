import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, ImageBackground,
 Alert, FlatList, TouchableOpacity, Linking, Image } from "react-native";
import axios from "axios";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default class DoneScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            reports: [],
            blogs: []
        };
    }

    render() {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>Work Done</Text>
                        </View>
                    </ImageBackground>
                </View >
            );
        }  
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    }
});