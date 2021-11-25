import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/store/create.store';
import {Provider} from 'react-redux';
import {GeneralPage} from './components/generalPage';

ReactDOM.render(
    <Provider store={store}>
        <GeneralPage/>
    </Provider>,
    document.getElementById('root')
);
