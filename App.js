import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./src/Store";
import Header from "./src/components/Header";
import CryptoContainer from "./src/components/CryptoContainer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Header/>
                    <CryptoContainer/>
                </View>
            </Provider>
        );
    }
}