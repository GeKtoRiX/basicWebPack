import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header/Header";
import Paragraph from "./src/components/Paragraph/Paragraph";

const AppComponent = (
  <>
    <Header />
    <Paragraph />
  </>
);

ReactDOM.render(AppComponent, document.getElementById('app'));

/*
// Импортирование .js файлов в исполняющий index.js файл.
import header from './src/components/Header/header';
import paragraph from './src/components/Paragraph/paragraph';

// Добавление элеметов h1 и p в тег body через вызов функций.
document.body.appendChild(header());
document.body.appendChild(paragraph());
*/
