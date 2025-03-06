import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  curValue: "0",
  prevValue: null,
  operater: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    userInputNum: (state, action) => {

      if (state.curValue === "0") {
        state.curValue = action.payload.toString();
      } else {
        state.curValue += action.payload.toString();
      }
    },

    operaterChoose: (state, action) => {
      if (state.curValue !== "0") {
        state.prevValue = parseFloat(state.curValue);
        state.curValue = "0";
        state.operater = action.payload;
      }
    },

    calculator: (state) => {
      if (state.prevValue !== null && state.operater) {
        const num1 = state.prevValue;
        const num2 = parseFloat(state.curValue);

        let result = 0;
        switch (state.operater) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2
            break;
        }

        state.curValue = result.toString();
        state.prevValue = null;
        state.operater = null;
      }
    },

    clear: (state) => {
      state.curValue = "0";
      state.prevValue = null;
      state.operater = null;
    },
  },
});

export const { operaterChoose, calculator, clear, userInputNum } = calculatorSlice.actions;

export default calculatorSlice.reducer;
