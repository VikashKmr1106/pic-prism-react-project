import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    role: localStorage.getItem('role') || null,
    author: localStorage.getItem('author') || null,
    isAuthenticated: !!localStorage.getItem('accessToken'), // !! converts value to boolean
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.role = action.payload.role;
      state.author = action.payload.author;
      state.isAuthenticated = true;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      localStorage.setItem('role', action.payload.role);
      localStorage.setItem('author', action.payload.author);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.author = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('role');
      localStorage.removeItem('author');
    },
    refreshTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
  },
});

export const { login, logout, refreshTokens } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const localStorageKeys = ['accessToken', 'refreshToken', 'role', 'author'];

// const getInitialState = () => {
//   const initialState = {
//     accessToken: null,
//     refreshToken: null,
//     role: null,
//     author: null,
//     isAuthenticated: false,
//   };
  
//   localStorageKeys.forEach(key => {
//     initialState[key] = localStorage.getItem(key);
//   });

//   initialState.isAuthenticated = !!initialState.accessToken;

//   return initialState;
// };

// const setLocalStorage = (data) => {
//   localStorageKeys.forEach(key => {
//     if (data[key] !== undefined) {
//       localStorage.setItem(key, data[key]);
//     }
//   });
// };

// const removeLocalStorage = () => {
//   localStorageKeys.forEach(key => {
//     localStorage.removeItem(key);
//   });
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: getInitialState(),
//   reducers: {
//     login: (state, action) => {
//       Object.keys(state).forEach(key => {
//         if (action.payload[key] !== undefined) {
//           state[key] = action.payload[key];
//         }
//       });
//       state.isAuthenticated = true;
//       setLocalStorage(action.payload);
//     },
//     logout: (state) => {
//       Object.keys(state).forEach(key => {
//         state[key] = null;
//       });
//       state.isAuthenticated = false;
//       removeLocalStorage();
//     },
//     refreshTokens: (state, action) => {
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken;
//       setLocalStorage(action.payload);
//     },
//   },
// });

// export const { login, logout, refreshTokens } = authSlice.actions;
// export default authSlice.reducer;
