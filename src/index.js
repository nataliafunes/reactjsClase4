import store from './store';

document.addEventListener('click', function(e) {
    console.log(e.target);
    switch (e.target.id) {
        case 'suma':
            store.dispatch({type:'haceClick', data : Math.floor(new Date().getTime())});
            break;
    }
});

store.subscribe(function() {
    let estado = store.getState();
    console.log(estado);
    if (estado.estadoJuego === "SigueParticipando") {
        document.getElementById('titulo').innerHTML = estado.contador;
    }
    if (estado.estadoJuego === "Perdio") {
        alert('Maximo Alcanzado');
        document.getElementById('titulo').innerHTML = estado.contador;
    }
});