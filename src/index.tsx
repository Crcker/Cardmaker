import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardMaker from './CardMaker/CardMaker';
import reportWebVitals from './reportWebVitals';
import { addEditorChangeHandler, getCardMaker } from './editor';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <CardMaker cardMaker={getCardMaker()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

addEditorChangeHandler(render)
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
