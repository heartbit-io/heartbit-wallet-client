import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { getQuestionList } from 'apis/questionApi';

interface QuestionsSlice {
	questions: QuestionResponse[];
	offset: number;
	hasMore: boolean;
	questionsLoading: boolean;
	error: string;
	refreshing: boolean;
}

const initialState: QuestionsSlice = {
	questions: [],
	offset: 0,
	hasMore: true,
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
		setHasMore: (state, action) => ({
			...state,
			hasMore: action.payload,
		}),
		setRefreshing: (state, action) => ({
			...state,
			refreshing: action.payload,
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
	removeQuestion,
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
					});
			}
		} catch (err) {
			console.log('FETCH QUESTIONS LIST ERR:', err);
			dispatch(setError(err));
		}
	};
