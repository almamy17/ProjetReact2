import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favorisReducer from './reducers/favorisReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Middleware: Redux Persist Config
const persistConfig = {
    // Root?
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [ 'favorisReducer'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
};

const rootReducer = combineReducers(
    {
        
        favorisReducer
    }
);

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

export { store, persistor };

// const configureStore = () => {
//     return createStore(rootReducer, applyMiddleware(thunk));
// }
// export default configureStore;