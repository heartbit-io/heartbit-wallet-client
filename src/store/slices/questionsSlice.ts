import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { getQuestionList } from 'apis/questionApi';

interface QuestionsSlice {
	questions: QuestionResponse[];
	offset: number;
	hasMore: boolean;
	loading: boolean;
	error: string;
	refreshing: boolean;
	fetchingMore: boolean;
}

const initialState: QuestionsSlice = {
	questions: [],
	offset: 0,
	hasMore: true,
	loading: false,
	error: '',
	refreshing: false,
	fetchingMore: false,
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
			loading: action.payload,
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
		setFetchingMore: (state, action) => ({
			...state,
			fetchingMore: action.payload,
		}),
		removeQuestion: (state, action) => ({
			...state,
			questions: state.questions.filter(
				question => question.id !== action.payload,
			),
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
	setHasMore,
	setRefreshing,
	setFetchingMore,
	removeQuestion,
	resetQuestions,
} = questionsSlice.actions;
export default questionsSlice.reducer;

export const fetchQuestionsList =
	(refresh = false, fetchingMore = false): AppThunk =>
	async (dispatch, getState) => {
		try {
			let { questions, offset, loading, refreshing } = getState().questions;
			if (!loading) {
				dispatch(setLoading(true));
				dispatch(setRefreshing(refresh));
				dispatch(setFetchingMore(fetchingMore));
				offset = refresh ? 0 : offset;
				getQuestionList(10, offset)
					.then(res => {
						if (res.data) {
							dispatch(setHasMore(res.data.hasMore));
							if (refresh) {
								dispatch(setQuestions(res.data.questions));
								dispatch(setOffset(res.data.questions.length));
							} else {
								dispatch(setQuestions([...questions, ...res.data.questions]));
								dispatch(
									setOffset([...questions, ...res.data.questions].length),
								);
							}
						}
					})
					.catch(err => dispatch(setError(err)))
					.finally(() => {
						dispatch(setLoading(false));
						dispatch(setRefreshing(false));
						dispatch(setFetchingMore(false));
					});
			}
		} catch (err) {
			console.log('FETCH QUESTIONS LIST ERR:', err);
			dispatch(setError(err));
		}
	};
