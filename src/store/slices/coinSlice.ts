import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';

// apis
import { getBtcRates } from 'apis/coinApi';

interface CoinSlice {
	USDPerSat: number;
	loading: boolean;
	error: string;
}

const initialState: CoinSlice = {
	USDPerSat: 0,
	loading: false,
	error: '',
};

export const coinSlice = createSlice({
	name: 'coin',
	initialState,
	reducers: {
		setUSDPerSat: (state, action) => ({
			...state,
			USDPerSat: action.payload,
		}),
		setLoading: (state, action) => ({
			...state,
			loading: action.payload,
		}),
		setError: (state, action) => ({
			...state,
			error: action.payload,
		}),
		resetUserData: () => ({
			...initialState,
		}),
	},
});

export const { setUSDPerSat, setLoading, setError, resetUserData } =
	coinSlice.actions;
export default coinSlice.reducer;

export const fetchLatestBtcRate = (): AppThunk => async dispatch => {
	getBtcRates()
		.then(res => dispatch(setUSDPerSat(res.data?.customSatoshi as number)))
		.catch(err => console.log(err));
};
