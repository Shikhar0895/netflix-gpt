import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedInUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = [
        {
          uid: action.payload.uid,
          userName: action.payload.userName,
          email: action.payload.email,
        },
      ];
      state.signedInUser.push(user);
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
