import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from "./Counter";
import App from './App';
import Counternew from './Counternew';
import Demo from './Demo';
import Demonew from './Demonew';
import ListDemo from './ListDemo';
import ToDoList from './ToDoList';
import Hooks from './Hooks'
import AjaxAxios from './AjaxAxios';
import Form from './Form';

//var x = setInterval(() => {
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//  <React.StrictMode>
//    <Counter />
//  </React.StrictMode>
//);

//},1000)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Form />
</React.StrictMode>
);
