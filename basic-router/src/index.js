import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Switch, Route,Redirect} from 'react-router-dom';
import App from './App';




ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Swich>

            </Swich>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
