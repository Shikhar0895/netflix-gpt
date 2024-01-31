import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedInUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        uid: action.payload.uid,
        userName: action.payload.userName,
        email: action.payload.email,
      };
      state.signedInUser.push(newUser);
    },
    removeUser: (state, action) => {
      state.signedInUser = [];
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
