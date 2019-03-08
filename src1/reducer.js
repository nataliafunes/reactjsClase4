function acaVaLaLogica(estadoAnterior, accion) {

    switch (accion.type) {
        case 'sumar':
            estadoAnterior.contador++;
            break;
        case 'restar':
            estadoAnterior.contador--;
            break;
    }

    return estadoAnterior;
}

window.probar = acaVaLaLogica;

export default acaVaLaLogica;