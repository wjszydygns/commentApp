import React from 'react';
import ReactDOM from 'react-dom';
import App from  "./comentAppOpt/app/app"
import * as serviceWorker from './serviceWorker';
import Search from "./searchComponent/index"
import SearchOpt from "./searchComponentOpt/index"

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<SearchOpt/>, document.getElementById('root'));


serviceWorker.unregister();
