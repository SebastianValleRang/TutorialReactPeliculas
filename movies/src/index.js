import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Componente titulo = "titulo" contenido = "Hola desde React">Hola</Componente>
);

function Componente(props){
  
  console.log(props);
  //const {titulo, contenido} = props;

  return (
    <div className="contenedor">
    <h1>{props.titulo}</h1>
    <div>{props.contenido}</div>
    <div>{props.children}</div>
  </div>
  )  
}

reportWebVitals();
*/

