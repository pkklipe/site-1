const curtidas=document.getElementById("curtidas")

curtidas.addEventListener("click", aumentaCurtidas)

//função aumentar curtidas
function aumentaCurtidas(){
   let quantidade =document.querySelector("span")
   quantidade.textContent++;
}