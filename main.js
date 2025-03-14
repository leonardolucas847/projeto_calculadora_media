const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = [];
const notas = [];
let linhas = '';
const spanAprovado = '<span class= "resultado aprovado" >Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado" >Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima'))


const form = document.getElementById ('form-atividade')
form.addEventListener ('submit', function(e) {
    e.preventDefault ();
    
    
    adicionaLinha ()
    atualizaTabela ()
    atualizaMediaFinal ()
})

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById ('nome-atividade');
    const inputNotaAtividade = document.getElementById ('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade: ${inputNomeAtividade.value} ja foi inserida`)
    }
    else {
    atividades.push (inputNomeAtividade.value)
    notas.push (parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += (`<td> ${inputNomeAtividade.value} </td>`)
    linha += (` <td> ${inputNotaAtividade.value} </td>`)
    linha += (`<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`);
    linha += ('</tr>');
    linhas += linha
    
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}
}
function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas;
}
function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal ()

    document.getElementById ('valor-da-media-final').innerHTML = mediaFinal
    document.getElementById ('aprovação').innerHTML =  mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;

}


function calculaMediaFinal () {
    let somaDasNotas = 0 ;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
        
    }
    return  somaDasNotas/notas.length
}
