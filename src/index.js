import React from 'react';
import ReactDOM from 'react-dom';
import App from  "./views/app"
import * as serviceWorker from './serviceWorker';
import  {BrowserRouter}  from "react-router-dom"
//import Search from "./searchComponent/index"
//import SearchOpt from "./searchComponentOpt/index"

ReactDOM.render(
    (
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    ),
 document.getElementById('root'));



serviceWorker.unregister();
