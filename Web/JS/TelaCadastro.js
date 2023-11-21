
function cadastrar() {

    var nome = input_nome.value;
    var senha = input_senha.value;
    var senhaConfirm = input_senhaConfirm.value;
    var email = input_email.value;


    var nomeValidacao = false;
    var senhaConfirmValidacao = false;
    var emailValidacao = false;
    var senhaValidacao = false;

    //validação dos campos nao poderem ser nulos
    if (nome == "") {
        div_nome.innerHTML = "* Esse campo é obrigatório";
    } else {
        div_nome.innerHTML = "";
        nomeValidacao = true;
    }

    // email possuiir @
    if (email.indexOf("@") == -1) {
        div_email.innerHTML = "* Insira um e-mail válido";
    } else {
        div_email.innerHTML = '';
        emailValidacao = true;
    }


    // senha com 8 dígitos no mínimo
    
    if (senha.length < 8) {
        div_8caracter.innerHTML = '• Sua senha não possui pelo menos 8 caracteres !';
    } else {
        div_8caracter.innerHTML = '';
    }

    // senha possuir pelo menos um numero
    if (senha.indexOf("0") > -1 ||
        senha.indexOf("1") > -1 ||
        senha.indexOf("2") > -1 ||
        senha.indexOf("3") > -1 ||
        senha.indexOf("4") > -1 ||
        senha.indexOf("5") > -1 ||
        senha.indexOf("6") > -1 ||
        senha.indexOf("7") > -1 ||
        senha.indexOf("8") > -1 ||
        senha.indexOf("9") > -1) {
        div_numero.innerHTML = '';
    } else {
        div_numero.innerHTML = '• Não possui número';
    }

    // senha possuir pelo menos uma letra maiuscula
    if (senha.toLowerCase() == senha) {
        div_maiuscula.innerHTML = '• Não possui letra maiúscula';
    } else {
        div_maiuscula.innerHTML = '';
    }

    // senha possuir uma letra minuscula
    if (senha.toUpperCase() == senha) {
        div_minuscula.innerHTML = '• Não possui letra minúscula';
    } else {
        div_minuscula.innerHTML = '';
    }

    // senha possuir um caractere especial
    // caracteres especias validados = !@#$ %^&* ()_ + {}[] |\\: ; \"'<>,.?/~-
    if (senha.indexOf("!") > -1 ||
        senha.indexOf("@") > -1 ||
        senha.indexOf("#") > -1 ||
        senha.indexOf("$") > -1 ||
        senha.indexOf("%") > -1 ||
        senha.indexOf("^") > -1 ||
        senha.indexOf("&") > -1 ||
        senha.indexOf("(") > -1 ||
        senha.indexOf(")") > -1 ||
        senha.indexOf(")") > -1 ||
        senha.indexOf(")") > -1 ||
        senha.indexOf("+") > -1 ||
        senha.indexOf("{") > -1 ||
        senha.indexOf("}") > -1 ||
        senha.indexOf("]") > -1 ||
        senha.indexOf("[") > -1 ||
        senha.indexOf("|") > -1 ||
        senha.indexOf(";") > -1 ||
        senha.indexOf(":") > -1 ||
        senha.indexOf("?") > -1 ||
        senha.indexOf("'") > -1 ||
        senha.indexOf(`"`) > -1 ||
        senha.indexOf("<") > -1 ||
        senha.indexOf(">") > -1 ||
        senha.indexOf(",") > -1 ||
        senha.indexOf(".") > -1 ||
        senha.indexOf("~") > -1 ||
        senha.indexOf("/") > -1 ||
        senha.indexOf("-") > -1 ||
        senha.indexOf("_") > -1) {
        div_especial.innerHTML = ' ';
    } else {
        div_especial.innerHTML = '• Não possui caractere especial';
    }
if ( senha.length > 8 &&
(senha.indexOf("0") > 0 ||
senha.indexOf("1") > 0 ||
senha.indexOf("2") > 0 ||
senha.indexOf("3") > 0 ||
senha.indexOf("4") > 0 ||
senha.indexOf("5") > 0 ||
senha.indexOf("6") > 0 ||
senha.indexOf("7") > 0 ||
senha.indexOf("8") > 0 ||
senha.indexOf("9") > 0)&&
senha.toLowerCase() != senha &&
senha.toUpperCase() != senha &&
(senha.indexOf("!") > 0 ||
        senha.indexOf("@") > 0 ||
        senha.indexOf("#") > 0 ||
        senha.indexOf("$") > 0 ||
        senha.indexOf("%") > 0 ||
        senha.indexOf("^") > 0 ||
        senha.indexOf("&") > 0 ||
        senha.indexOf("(") > 0 ||
        senha.indexOf(")") > 0 ||
        senha.indexOf(")") > 0 ||
        senha.indexOf(")") > 0 ||
        senha.indexOf("+") > 0 ||
        senha.indexOf("{") > 0 ||
        senha.indexOf("}") > 0 ||
        senha.indexOf("]") > 0 ||
        senha.indexOf("[") > 0 ||
        senha.indexOf("|") > 0 ||
        senha.indexOf(";") > 0 ||
        senha.indexOf(":") > 0 ||
        senha.indexOf("?") > 0 ||
        senha.indexOf("'") > 0 ||
        senha.indexOf(`"`) > 0 ||
        senha.indexOf("<") > 0 ||
        senha.indexOf(">") > 0 ||
        senha.indexOf(",") > 0 ||
        senha.indexOf(".") > 0 ||
        senha.indexOf("~") > 0 ||
        senha.indexOf("/") > 0 ||
        senha.indexOf("-") > 0 ||
        senha.indexOf("_") > 0)
){
    senhaValidacao = true;
}

    if (senha == senhaConfirm){
        div_senhaConfirm.innerHTML = ``;
        senhaConfirmValidacao = true;
    }else{
        div_senhaConfirm.innerHTML = `As senhas não coincidem`;
    }

    if (nomeValidacao == true && emailValidacao == true && senhaConfirmValidacao == true && senhaValidacao == true){
        alert("Cadastro realizado!")
        window.location.href = "http://127.0.0.1:5500/PROJETO_INDIVIDUAL/ProjetoIndividualSP3/Web/TelaLogin.html"
    }

}
