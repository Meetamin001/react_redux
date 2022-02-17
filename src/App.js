import './App.css';
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

const App = () => {
  //selector get initial state of changeTheNumber
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch(); //dispatch triggers the action

  return (
    <>
      <div className="container">

        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity_minus" title="Decrement" onClick={ () => dispatch(decNumber()) }><span>-</span></a>
          <input name="quantity" type="text" className="quantity_input" value={ myState } />
          <a className="quantity_plus" title="Increment" onClick={ () => dispatch(incNumber(2)) }><span>+</span></a>
        </div>

      </div>
    </>
  );
};

export default App;
