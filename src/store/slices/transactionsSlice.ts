import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from 'apis/transactionsApi';
import { AppThunk } from 'store';

interface TransactionsSlice {
	transactions: TransactionProps[];
	transactionsLoading: boolean;
	error: string;
	offset: number;
	hasMore: boolean;
	refreshing: boolean;
}

const initialState: TransactionsSlice = {
	transactions: [],
	transactionsLoading: false,
	error: '',
	offset: 0,
	hasMore: true,
	refreshing: false,
};

export const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		setTransactions: (state, action) => ({
			...state,
			transactions: action.payload,
		}),
		setLoading: (state, action) => ({
			...state,
			transactionsLoading: action.payload,
		}),
		setError: (state, action) => ({
			...state,
			error: action.payload,
		}),
		setOffset: (state, action) => ({
			...state,
			offset: action.payload,
		}),
		setHasMore: (state, action) => ({
			...state,
			hasMore: action.payload,
		}),
		setRefreshing: (state, action) => ({
			...state,
			refreshing: action.payload,
		}),
		resetTransactions: () => ({
			...initialState,
		}),
	},
});

export const {
	setTransactions,
	setLoading,
	setError,
	setOffset,
	setHasMore,
	setRefreshing,
	resetTransactions,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;

export const getTransactionsList =
	(refresh = false): AppThunk =>
	async (dispatch, getState) => {
		try {
			const { pubkey } = getState().user.userData;
			let { transactions, offset, transactionsLoading, refreshing } =
				getState().transactions;
			if (!transactionsLoading && !refreshing) {
				dispatch(setRefreshing(refresh));
				dispatch(setLoading(true));
				offset = refresh ? 0 : offset;
				getTransactions(pubkey, 50, offset)
					.then(res => {
						if (res.data) {
							dispatch(setHasMore(res.data.hasMore));
							if (refresh) {
								dispatch(setTransactions(res.data.transactions));
								dispatch(setOffset(0));
							} else {
								dispatch(
									setTransactions([...transactions, ...res.data.transactions]),
								);
								dispatch(
									setOffset([...transactions, ...res.data.transactions].length),
								);
							}
						}
					})
					.catch(err => dispatch(setError(err)))
					.finally(() => {
						dispatch(setLoading(false));
						dispatch(setRefreshing(false));
					});
			}
		} catch (err) {
			console.log('FETCH TRANSACTIONS LIST ERR:', err);
			dispatch(setError(err));
		}
	};
