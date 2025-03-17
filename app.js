// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    
    if(nombre == ""){
        alert("Por favor, inserte un nombre valido.");
    }else{
        amigos.push(nombre);
        console.log(amigos)
        document.getElementById("amigo").value = "";
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        for(let i = 0; i <amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent =amigos[i];
            lista.appendChild(li);
        }
    } 
}
let modal = document.getElementById("miModal");
function sortearAmigo(){
    if(amigos.length > 0)  {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let nombreAleatorio = amigos[aleatorio];
        document.getElementById("resultado").textContent = nombreAleatorio;
        document.getElementById("sorteo").textContent = nombreAleatorio;
        modal.style.display = "flex";
    }
    else{
        alert("No existen nombres en la lista");
    }
}
function cerrarModal(){
    modal.style.display = "none"
}