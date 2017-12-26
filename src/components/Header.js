import React from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20
    }
});

const {headerContainer, heading} = styles;

const Header = () => (<View style={headerContainer}>
    <Text style={heading}>Anyul's CryptoCurrency App</Text>
</View>);

export default Header;