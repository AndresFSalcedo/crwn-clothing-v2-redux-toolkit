import { createSlice } from '@reduxjs/toolkit';

const USER_INITIAL_STATE = {
  currentUser: null,
};

// Create slice.
export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    },
  },
});


export const { setCurrentUser } = userSlice.actions;

// Create the reducer.
export const userReducer = userSlice.reducer;
