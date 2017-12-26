import React from "react";
import {ScrollView, Text, View} from "react-native";
import {connect} from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import FetchCoinData from "../Actions/FetchCoinData";
import CoinCard from "./Coincard";

class CryptoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {crypto} = this.props;
        return (
            <View>
                <Spinner
                    visible={crypto.isFetching}
                    textContent={"Loading..."}
                    textStyle={{color: "#253145"}}
                    animation="fade"
                />
                {Array.isArray(crypto.data) &&
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {crypto.data.map((coin, index) =>
                        <CoinCard
                            key={index}
                            coin_name={coin.name}
                            symbol={coin.symbol}
                            price_usd={coin.price_usd}
                            percent_change_24h={coin.percent_change_24h}
                            percent_change_7d={coin.percent_change_7d}
                        />)}
                </ScrollView>}
            </View>
        );
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
};

const mapState = (state) => ({crypto: state.crypto});
const mapDispatch = dispatch => ({fetchData: () => dispatch(FetchCoinData())});
const container = connect(mapState, mapDispatch)(CryptoContainer);

export default container;
