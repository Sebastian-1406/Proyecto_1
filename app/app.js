const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
    
    let formularioInput = document.querySelectorAll(".formulario__input");
    


    const validarCampo = (e) => {
        

        switch (e.target.name) {
            case "nombre":
                validarFormulario(expresiones.nombre, e.target, "nombre")
                break;
            case "apellido":
                validarFormulario(expresiones.nombre, e.target, "apellido")
                
                break;
            case "email":
                validarFormulario(expresiones.correo, e.target, "email")
                break;

        }

    }

    const validarFormulario = (expresion, input, campo) => {
        
       if(expresion.test(input.value)){
           document.querySelector(`.formulario__${campo}`).classList.add("formulario__check")
           document.querySelector(`.formulario__${campo}`).classList.remove("formulario__incorrecto")
       }else{
        document.querySelector(`.formulario__${campo}`).classList.remove("formulario__check")
        document.querySelector(`.formulario__${campo}`).classList.add("formulario__incorrecto")

        
       }
    }



    formularioInput.forEach((input) => {
        input.addEventListener("keyup", validarCampo)
        input.addEventListener("blur", validarCampo)
    })
    
    