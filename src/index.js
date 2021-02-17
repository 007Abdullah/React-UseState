import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { App, Check, Number } from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <App text={
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac scelerisque ligula. Aliquam tempus in tortor sed venenatis. Quisque eget lacinia ante, vel congue nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et risus ut enim faucibus sollicitudin porta et leo. Maecenas et eros sed nibh volutpat sodales. Vivamus at mauris eget metus semper facilisis eu id diam. Quisque mauris enim, faucibus et tempus quis, dapibus ac dolor. Sed non condimentum erat, quis pulvinar lorem. Donec eleifend luctus mauris ut consequat.`
    } maxlength={35} />
    <Check />
    {/* <Number /> */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
