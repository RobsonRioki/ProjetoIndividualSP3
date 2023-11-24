function redirecionar(){
    window.location.href = "http://127.0.0.1:5500/PROJETO_INDIVIDUAL/ProjetoIndividualSP3/Web/TelaQuestionario.html";
}

function avaliar(){
    var avaliacao1 = input_avaliacao1.value;
    var avaliacao2 = input_avaliacao2.value;
    var avaliacao3 = input_avaliacao3.value;
    var avaliacao4 = input_avaliacao4.value;
    var avaliacao5 = input_avaliacao5.value;
    var avaliacao6 = input_avaliacao6.value;

    if (avaliacao1 && 10 && avaliacao2 && 10 || avaliacao3 && 10 || avaliacao4 && 10 || avaliacao5 && 10 || avaliacao6 && 10 || avaliacao1 && 0 || avaliacao2 && 0 || avaliacao3 && 0 || avaliacao4 && 0 || avaliacao5 && 0 || avaliacao6 && 0){
        alert("Avaliação enviada");





        
    }else{
        alert("Avaliações inválidas. Por favor insira um número entre 0 e 10");
    }

}