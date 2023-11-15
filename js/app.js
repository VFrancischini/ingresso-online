function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidadeIngresso);
    } else {
        comprarInferior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidadeIngresso > quantidadePista) {
        alert('Quantidade indisponível para tipo Pista');
    } else {
        quantidadePista -= quantidadeIngresso;

        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra feita com sucesso!');
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidadeIngresso > quantidadeSuperior) {
        alert('Quantidade indisponível para tipo Superior');
    } else {
        quantidadeSuperior -= quantidadeIngresso;

        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra feita com sucesso!');
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidadeIngresso > quantidadeInferior) {
        alert('Quantidade indisponível para tipo Inferior');
    } else {
        quantidadeInferior -= quantidadeIngresso;

        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra feita com sucesso!');
    }
}