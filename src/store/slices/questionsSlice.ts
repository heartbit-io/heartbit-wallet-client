import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { getQuestionList } from 'apis/questionApi';

interface QuestionsSlice {
	questions: GetQuestionResponse[];
	offset: number;
	questionsLoading: boolean;
	error: string;
	refreshing: boolean;
}

const initialState: QuestionsSlice = {
	questions: [],
	offset: 0,
	questionsLoading: false,
	error: '',
	refreshing: false,
};

export const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setQuestions: (state, action) => ({
			...state,
			questions: action.payload,
		}),
		setLoading: (state, action) => ({
			...state,
			questionsLoading: action.payload,
		}),
		setError: (state, action) => ({
			...state,
			error: action.payload,
		}),
		setOffset: (state, action) => ({
			...state,
			offset: action.payload,
		}),
		setRefreshing: (state, action) => ({
			...state,
			refreshing: action.payload,
		}),
		resetQuestions: () => ({
			...initialState,
		}),
	},
});

export const {
	setQuestions,
	setLoading,
	setError,
	setOffset,
	setRefreshing,
	resetQuestions,
} = questionsSlice.actions;
export default questionsSlice.reducer;

export const fetchQuestionsList =
	(refresh = false): AppThunk =>
	async (dispatch, getState) => {
		try {
			let { questions, offset, questionsLoading, refreshing } =
				getState().questions;
			if (!questionsLoading && !refreshing) {
				dispatch(setRefreshing(refresh));
				dispatch(setLoading(true));
				offset = refresh ? 0 : offset;
				getQuestionList(50, offset)
					.then(res => {
						if (res.data) {
							if (refresh) {
								dispatch(setQuestions(res.data));
								dispatch(setOffset(0));
							} else {
								dispatch(setQuestions([...questions, ...res.data]));
								dispatch(setOffset([...questions, ...res.data].length));
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
			console.log('FETCH QUESTIONS LIST ERR:', err);
			dispatch(setError(err));
		}
	};
