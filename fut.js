
function mostrarCuriosidade(idDoElemento) {
   const textoCuriosidade = document.getElementById(idDoElemento);
    
    if (textoCuriosidade.classList.contains('escondido')) {
       
        textoCuriosidade.classList.remove('escondido');
    } else {
       
        textoCuriosidade.classList.add('escondido');
    }
}
