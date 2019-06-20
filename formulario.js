
var validator = require('validator');
// && !validator.isIdentityCard(ingresonumerotarjeta)
document.getElementById("forma").addEventListener('submit', function(e){
    e.preventDefault();
    var todoBien = true;

    let ingresocorreo =document.getElementById("datoscorreo").value;
    let ingresonumerotarjeta=document.getElementById("datostarjeta").value;
    
    if(!validator.isEmail(ingresocorreo))
    {
        document.querySelector("#avisoEmail").innerHTML = "datos incorrectos";
        todoBien = false;
    }else{
        document.querySelector("#avisoEmail").innerHTML = "";
        todoBien = true;
    }

    if(!validator.isIdentityCard(ingresonumerotarjeta))
    {
        document.querySelector("#avisoTarjeta").innerHTML = "datos incorrectos";
        todoBien = false;
    }else{
        document.querySelector("#avisoTarjeta").innerHTML = "";
        todoBien = true;
    }

    if(todoBien){
        e.target.submit();
    }
});

