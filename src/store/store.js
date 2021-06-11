import { createStore } from 'redux';
import rootReducer from './reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'lpcrm',
    storage,
}
   
const persistedReducer = persistReducer(persistConfig, rootReducer)



let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }