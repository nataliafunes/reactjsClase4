function reducerPrincipal(estadoAnterior, acccion) {
    switch (acccion.type) {
        case 'haceClick':
            let targetObjetivo = 
                estadoAnterior.targetInicial / estadoAnterior.contador; 
            
            let letTiempoEfectivo = (acccion.data - estadoAnterior.ts);

            console.log("Target objetivo: " + targetObjetivo);
            console.log("Target efectivo: " + letTiempoEfectivo);

            estadoAnterior.contador++;
            estadoAnterior.ts = acccion.data;

            if (letTiempoEfectivo <= targetObjetivo) {
                estadoAnterior.estadoJuego = "SigueParticipando";
            }
            else {
                estadoAnterior.estadoJuego = "Perdio";
            }
    }
    return estadoAnterior;
}

window.probar = reducerPrincipal;

export default reducerPrincipal;