import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store'
import { Provider } from 'react-redux'
import './styles/main.css'
import App from './App'

/**
 * @file root folder of the application
 * @author Jean Marie Vianey RABEMANALINA
 * @see <a href="https://github.com/vianey-jean/Jean_Rabemanalina_13_Bank_API" target ="_blank"></a>
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
