const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiado');
let formEvalido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
e.preventDefault();

const numeroContaBeneficiario = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');
const mensagemSucesso = `valor montante de R$:( <b>${valorDeposito.value}</b> ,00 )- deposito para cliente: ( <b>${nomeBeneficiario.value}</b> )- conta :( <b>${numeroContaBeneficiario.value}</b> )`;

    formEvalido = validaNome(nomeBeneficiario.value)
    
if (formEvalido) {
    const containerMessagemSucesso = document.querySelector('.sucesso-menssagem');
    containerMessagemSucesso.innerHTML = mensagemSucesso;
    containerMessagemSucesso.style.display = 'block';

    nomeBeneficiario.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.erro-messagem').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup',function(e) {
console.log(e.target.value);
formEvalido = validaNome(e.target.value);

if (!formEvalido) {
    nomeBeneficiario.classList.add('erro'); 
    document.querySelector('.erro-messagem').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove('erro'); 
        document.querySelector('.erro-messagem').style.display = 'nome';
    }
});
