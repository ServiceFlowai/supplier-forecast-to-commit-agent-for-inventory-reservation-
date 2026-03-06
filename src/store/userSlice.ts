import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [
      { id: 1, name: 'John Doe', role: 'admin' },
      { id: 2, name: 'Jane Smith', role: 'buyer' }
    ]
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    }
  }
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;