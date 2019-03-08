import {createStore} from 'redux';
import acaVaLaLogica from './reducer';

let miStore = createStore(acaVaLaLogica, {
    contador: 0
});

export default miStore;