import { createSlice } from '@reduxjs/toolkit';
const initialFiveDays = { fiveDays: [] }

const fiveDaysSlice = createSlice({
    name: 'fiveDays',
    initialState: initialFiveDays,
    reducers: {
        getDetail(state, action) {
            state.fiveDays = action.payload;
            console.log(state.fiveDays);
        }
    }
});

export const fiveDaysActions = fiveDaysSlice.actions;
export default fiveDaysSlice.reducer;
