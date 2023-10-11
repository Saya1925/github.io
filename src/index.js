import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

{/* ReactのアプリケーションをDOMにマウントする
Reactのコンポーネントツリーをブラウザの実際のDOMノードに変換して、それをブラウザ上で表示させるというプロセス
*/}
ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();