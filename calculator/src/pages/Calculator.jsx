import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operaterChoose, calculator, clear, userInputNum } from '../store/calculator/calculatorSlice';
import './calculator.css';

export function Calculator() {
  const curValue = useSelector((state) => state.calculator.curValue);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="calculator">
        <h2>Calculator</h2>
        <div className="display">{curValue}</div>
        <div className="buttons">
          <button className='numbutton' onClick={() => dispatch(userInputNum(7))}>7</button>
          <button className='numbutton' onClick={() => dispatch(userInputNum(8))}>8</button>
          <button className='numbutton' onClick={() => dispatch(userInputNum(9))}>9</button>
          <button className='operatorbutton' onClick={() => dispatch(clear())}>C</button>

          <button className='numbutton' onClick={() => dispatch(userInputNum(4))}>4</button>
          <button className='numbutton' onClick={() => dispatch(userInputNum(5))}>5</button>
          <button className='numbutton' onClick={() => dispatch(userInputNum(6))}>6</button>
          <button className='operatorbutton' onClick={() => dispatch(operaterChoose('*'))}>*</button>

          <button className='numbutton' onClick={() => dispatch(userInputNum(1))}>1</button>
          <button className='numbutton' onClick={() => dispatch(userInputNum(2))}>2</button>
          <button className='numbutton' onClick={() => dispatch(userInputNum(3))}>3</button>
          <button className='operatorbutton' onClick={() => dispatch(operaterChoose('/'))}>/</button>

          <button className='numbutton' onClick={() => dispatch(userInputNum(0))}>0</button>
          <button className='operatorbutton' onClick={() => dispatch(calculator())}>=</button>
          <button className='operatorbutton' onClick={() => dispatch(operaterChoose('-'))}>-</button>
          <button className='operatorbutton' onClick={() => dispatch(operaterChoose('+'))}>+</button>
        </div>
      </div>
    </div>
  );
}
