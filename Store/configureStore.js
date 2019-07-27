import { createStore } from 'redux';
import toggleAcquis from './Reducers/acquisReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig  = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig , toggleAcquis)

export default createStore(persistedReducer)