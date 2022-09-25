import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    trip_name: "Ski Trip",
    city: "Jackson",
    state: "Wyoming",
    country: "USA",
    accommodation: "hotel",
    people: "4",
    trip_date: "2023/04/18",
    trip_length: "4",
  },
  reducers: {
    chooseName: (state, action) => {
      state.trip_name = action.payload;
    },
    chooseCity: (state, action) => {
      state.city = action.payload;
    },
    chooseState: (state, action) => {
      state.state = action.payload;
    },
    chooseCountry: (state, action) => {
      state.country = action.payload;
    },
    chooseAccomm: (state, action) => {
      state.accommodation = action.payload;
    },
    choosePeople: (state, action) => {
      state.people = action.payload;
    },
    chooseDate: (state, action) => {
      state.trip_date = action.payload;
    },
    chooseLength: (state, action) => {
      state.trip_length = action.payload;
    },
  },
});

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseCity, chooseState, chooseCountry, chooseAccomm, choosePeople, chooseDate, chooseLength } = rootSlice.actions;
