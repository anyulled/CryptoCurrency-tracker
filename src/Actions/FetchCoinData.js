import axios from "axios";

export const apiBaseUrl = "https://api.coinmarketcap.com";
export const cryptoActions = {
    FETCH_COIN_DATA_START: "crypto/fetch_coin_data_start",
    FETCH_COIN_DATA_SUCCEED: "crypto/fetch_coin_data_succeed",
    FETCH_COIN_DATA_ERROR: "crypto/fetch_coin_data_error"
};

const fetchingData = () => ({type: cryptoActions.FETCH_COIN_DATA_START});
const fetchError = error => ({payload: error, type: cryptoActions.FETCH_COIN_DATA_ERROR});
const loadData = data => ({
    payload: data,
    type: cryptoActions.FETCH_COIN_DATA_SUCCEED
});

export default () => dispatch => {
    dispatch(fetchingData());
    return axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`)
        .then(response => dispatch(loadData(response.data)))
        .catch(error => dispatch(fetchError(error.data)));
};