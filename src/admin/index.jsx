import 'normalize.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeManagement from "./Page/HomeManagement/HomeManagement";
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}>
    <HomeManagement/>
</Provider>, document.getElementById('root'));
