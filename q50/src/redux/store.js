import { configureStore } from '@reduxjs/toolkit';

import magicReducer from './magicSlice/magicslice'


export default configureStore({
    reducer:{ 
        magic: magicReducer,
    },
   
});

