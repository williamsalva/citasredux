import {createStore} from 'redux';
import reducer from './reducers';

import {obtenerStateStorage ,guardarStateStorage} from './localstorange';


// //Definir state inicial
// const initialState=[];
 const storageState = obtenerStateStorage();


const store = createStore(
    reducer,
    storageState,
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


store.subscribite(()=>{

    guardarStateStorage({
        citas: store.getState().citas
    })

})
export default store;