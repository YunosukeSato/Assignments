import { Provider } from 'react-redux'
import { legacy_createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import allReducers from './allReducers'

let middleware = []
if(import.meta.env.DEV){
    middleware = [...middleware, logger]
}

const store = legacy_createStore(allReducers, applyMiddleware(...middleware))

export const AppProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
)