```javascript

```

## Installing Redux

### Libraries used

```javascript
npm i -D @reduxjs/toolkit
npm i react-redux
```

- ### Step 1 : Create a store

```javascript
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore();
```

What does this configureStore takes as an argument?

It Takes a configuration which consist of reducer sub configuration

```javascript
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    //comprise of different reducers from different slices
    user: userReducer,
  },
});

export default store;
```

- ### Step 2 : Create a slice

```javascript
//userSlice.js
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

//imported at store
export default userSlice.reducer;
```
