// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEndhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEndhancers);

// export default store;




// REDUX TOOLKIT:

import { configureStore } from '@reduxjs/toolkit';
import filesrSlice from '../components/Filters/filtersSlice';
import todosSlice from '../components/TodoList/todosSlice';


const store = configureStore({
    reducer: {
        filters: filesrSlice.reducer,
        todoList: todosSlice.reducer,
    },
});

export default store;
