import { createSlice } from "@reduxjs/toolkit";

const initialProjectsState = {
  listLoading: false,
  entities: null,
  lastError: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: initialProjectsState,
  reducers: {
    startCall: (state) => {
      state.error = null;
      state.listLoading = true;
    },
    projectsFetched: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
    },
  },
});
