document.getElementById("boton").
addEventListener("click", function(){
    var nombre=document.getElementById("nombre").value;

    document.getElementById("nombre").value="";

    document.getElementById("saludo").innerHTML="Hola "+nombre;
})
