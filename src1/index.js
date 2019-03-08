import miStore from './store';

document.addEventListener('click', function(e) {
    switch (e.target.id) {
        case 'btnSuma':
            miStore.dispatch({type:'sumar', data: {}});
            break;
        case 'btnResta':
            miStore.dispatch({type:'restar', data: {}});
            break;
    }
});

miStore.subscribe(function() {
    console.log(miStore.getState());
    document.getElementById('cartel').innerHTML = miStore.getState().contador;
});