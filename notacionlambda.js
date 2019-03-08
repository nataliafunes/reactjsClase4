function aplicarFuncion(fn) {
    console.log('guarda que voy a aplicar una funcion');
    fn('parametro');
    console.log('Listo, labure mucho');
}

aplicarFuncion(loQueVenga => console.log(['va a venir', 
    loQueVenga, 'yasta'].join(' ')));

aplicarFuncion(function(param) {
    console.log(this, param);
    console.log(param);
    console.log(param);
    console.log(param);
    console.log(param);
    console.log(param);
    console.log(param);
    console.log(param);
});

aplicarFuncion((param) => {
    console.log(this);
    return param;
});

