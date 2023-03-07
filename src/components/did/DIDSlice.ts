import {AppThunk, RootState} from '../../stores/store';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {BtcAccount} from '../../utils/hippocrat';

export interface DIDState {
  value: BtcAccount;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: DIDState = {
  value: undefined,
  status: 'idle',
};

export const DIDSlice = createSlice({
  name: 'DID',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDID: (state, action: PayloadAction<BtcAccount>) => {
      state.value = action.payload;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDID = (state: RootState) => state.DID.value;

export default DIDSlice.reducer;
