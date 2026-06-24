// Função simples para mostrar ou esconder as curiosidades
function mostrarCuriosidade(idDoElemento) {
    // 1. Pega o parágrafo pelo ID enviado pelo botão
    const textoCuriosidade = document.getElementById(idDoElemento);
    
    // 2. Verifica se ele tem a classe 'escondido' no CSS
    if (textoCuriosidade.classList.contains('escondido')) {
        // Se estiver escondido, remove a classe para o texto aparecer
        textoCuriosidade.classList.remove('escondido');
    } else {
        // Se já estiver aparecendo, adiciona de volta para esconder
        textoCuriosidade.classList.add('escondido');
    }
}
