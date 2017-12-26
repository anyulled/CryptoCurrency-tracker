import {cryptoActions} from "../Actions/FetchCoinData";

const initialState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case cryptoActions.FETCH_COIN_DATA_START:
            return {
                ...state,
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: ""
            };
        case cryptoActions.FETCH_COIN_DATA_ERROR:
            return {
                ...state,
                data: null,
                hasError: true,
                errorMessage: action.payload,
                isFetching: false
            };
        case cryptoActions.FETCH_COIN_DATA_SUCCEED:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: ""
            };
        default:
            return state;
    }
};

export default reducer;