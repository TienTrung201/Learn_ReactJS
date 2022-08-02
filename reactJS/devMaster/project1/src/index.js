import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function emitComments(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`student-${id}`, {
        detail: `student ${id}`
      })
    );
  }, 2000);
}
emitComments(0);
emitComments(1);
emitComments(2);
emitComments(3);
emitComments(4);
emitComments(5);
emitComments(6);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
