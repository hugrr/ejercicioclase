


var validator = require('validator');



    

document.getElementById("forma").addEventListener('submit', function(){
    let formatomail=document.getElementById("datoscorreo").value;
    let datosnombre=document.getElementById("datoscorreo").value;
    let datosapellido=document.getElementById("datoscorreo").value;
    if (validator.isEmail(formatomail)===true &&
        validator.isEmpty(datosnombre)===false &&
        validator.isEmpty(datosapellido)===false
          
    )
       
   
    
    {
        alert ("sending")
    } else {
        alert ("verificar ....datos incorrectos");
    }
    
   
    
}
);
