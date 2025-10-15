import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    message: "Are you ready?"
  },
  reducers: {
    changeCounter(state, { payload }: PayloadAction<number>) {
      state.counter = payload;
    },
    changeMessage(state, { payload }: PayloadAction<string>) {
      state.message = payload;
    }
  }
});

export default CounterSlice.reducer;
export const { changeCounter, changeMessage } = CounterSlice.actions;
