// Variables Inputs
const nombre = document.querySelector("#name")
const lnombre = document.querySelector("#lname")
const email = document.querySelector("#email")
const clave = document.querySelector("#password")
const enviar = document.querySelector("#submit")
const formulario = document.querySelector("#formulario")

//Expresion Regular para EMAIL
const er =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i


eventListeners();

function eventListeners () {

    document.addEventListener("DOMContentLoaded", iniciarApp)

    nombre.addEventListener("blur", validarFormulario)
    lnombre.addEventListener("blur", validarFormulario)
    email.addEventListener("blur", validarFormulario)
    clave.addEventListener("blur", validarFormulario)

    formulario.addEventListener("submit", enviarEmail)
}

function iniciarApp(){
    enviar.disabled = true
    enviar.classList.add("opacity-50")
}


function validarFormulario (e){
    if(e.target.value.length > 0){ // Si los campos estan vacios

        //Elimina los errores
        const error = document.querySelector("p.error");

        if(error != null){
                error.remove();
            }

        e.target.classList.remove("border", "border-danger", "border-2")
        e.target.classList.add("border", "border-success", "border-2")
    }else{
        e.target.classList.remove("border", "border-success", "border-2")
      e.target.classList.add("border", "border-danger", "border-2")
      mostrarError("Todos los campos son obligatorios");
    }

    if(e.target.type === "email"){ // Validacion para email

        if(er.test(e.target.value)){
            const error = document.querySelector("p.error");

            if(error != null){
                error.remove();
            }
    
            e.target.classList.remove("border", "border-danger", "border-2")
            e.target.classList.add("border", "border-success", "border-2")
        }else{
            e.target.classList.remove("border", "border-success", "border-2")
            e.target.classList.add("border", "border-danger", "border-2")
            mostrarError("Invalid Email address");
        }
    }

    if(nombre.value !== "" && lnombre.value !== "" && er.test(email.value) !== "" && clave.value !== "" ){
        // Evalua si todos los campos estan correctamente llenados
        enviar.disabled = false
        enviar.classList.remove("opacity-50")
    }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p")
  mensajeError.textContent = mensaje
  mensajeError.classList.add("text-danger", "error")

  const errores = document.querySelectorAll(".error");

  if(errores.length === 0){
      formulario.appendChild(mensajeError)
  } 
}

function enviarEmail(e){
    e.preventDefault();
    const parrafo = document.createElement("p")
    parrafo.textContent = "Thanks for filling out our form!"
    parrafo.classList.add("text-success")
    formulario.appendChild(parrafo)
}