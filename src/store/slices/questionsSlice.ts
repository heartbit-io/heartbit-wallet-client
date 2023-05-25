import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { getQuestionList } from 'apis/questionApi';

interface QuestionsSlice {
	questions: GetQuestionResponse[];
	offset: number;
	questionsLoading: boolean;
	error: string;
}

const initialState: QuestionsSlice = {
	questions: [],
	offset: 0,
	questionsLoading: false,
	error: '',
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
		resetQuestions: () => ({
			...initialState,
		}),
	},
});

export const { setQuestions, setLoading, setError, setOffset, resetQuestions } =
	questionsSlice.actions;
export default questionsSlice.reducer;

export const fetchQuestionsList =
	(): AppThunk => async (dispatch, getState) => {
		try {
			const { questions, offset, questionsLoading } = getState().questions;
			if (!questionsLoading) {
				dispatch(setLoading(true));
				getQuestionList(10, offset)
					.then(res => {
						if (res.data && res?.data?.length > 0) {
							dispatch(setQuestions([...questions, ...res.data]));
							dispatch(setOffset(questions?.length + 10));
						}
					})
					.catch(err => dispatch(setError(err)))
					.finally(() => dispatch(setLoading(false)));
			}
		} catch (err) {
			console.log('FETCH QUESTIONS LIST ERR:', err);
			dispatch(setError(err));
		}
	};
