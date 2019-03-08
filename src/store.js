import {createStore} from 'redux';
import reducerPrincipal from './reducer';

let MiStore = createStore(reducerPrincipal, {
    contador : 1,
    targetInicial : 10000,
    ts : Math.floor(new Date().getTime())
});

window.pruebaReducer = reducerPrincipal;

export default MiStore;