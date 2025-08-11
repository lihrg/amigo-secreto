let amigos = [];

function adicionarAmigo() {
    console.log('o botão foi clicado');
    let campo = document.getElementById('amigo'); // Busca o input
    let nome = campo.value.trim(); // Pega o valor e tira os espaços

    if (nome === "") {
        alert('Por favor, inclua um nome válido!');
        return false;
    }

     if (amigos.includes(nome)) {
    alert(`O nome '${nome}' já está na lista!`);
    campo.value = ""; // Limpa o campo para o usuário inserir outro nome
    return; // Sai da função para não adicionar o nome repetido

     }
    // Se for válido, adiciona ao array
    amigos.push(nome);

      atualizarListaAmigos();
    // Limpa o campo do input
    campo.value = "";
    console.log(amigos); // Para visualizar a lista no console
    return true;
}

let resultado = [];

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }        
}
function sortearAmigo() {
 
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia!");
        return;
    }

    // Gera um índice aleatório entre 0 e (amigos.length - 1)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Pega o nome correspondente
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`O amigo sorteado foi: ${amigoSorteado}`);

    console.log("Amigo sorteado:", amigoSorteado);
   
}
