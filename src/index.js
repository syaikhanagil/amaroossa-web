import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';
import './assets/sass/vendors/_normalize.scss';
import './assets/sass/vendors/_bootstrap.scss';
import './assets/sass/vypereum/vypereum.sass';

const cache = createCache({ key: 'vy' });
ReactDOM.hydrate(
    <CacheProvider value={cache}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CacheProvider>,
    document.getElementById('vy-root')
);
