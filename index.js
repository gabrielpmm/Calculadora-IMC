// Essa função faz com que os dados recebidos calculem o IMC e dêm o resultado
function calculate(){
    // A variável altura pega o valor do input de id altura do html e divide por 100 para formatar de metros para centímetros
    var altura=(document.getElementById("altura").value)/100;
    // A variável peso pega o valor do input de id peso do html
    var peso=document.getElementById("peso").value;
    // A variável IMC pega o peso e divide pela altura elevada a 2 (peso/altura*altura)
    var imc = peso / altura ** 2;
    // As condicionais seguintes se referem a classificação que o calculo de IMC resultam 
   if(imc < 18.5){
    //essa função seguinte é um código de notificação vinda de um script descrito no html
    swal({
        title: "Você está magro", //Titulo
        text: "Precisa comer mais", //Texto
        icon: "warning", //Icone (Warning, Error, Success e Info)
      })}
    else if (imc < 24.9){
        swal({
            title: "Você está normal",
            text: "Mantenha esse peso",
            icon: "success",
          })
    }
    else if (imc < 29.9){
        swal({
            title: "Você está com sobrepeso",
            text: "Tente diminuir seu um pouco peso",
            icon: "warning",
          })
    }
    else if (imc < 39.9){
        swal({
            title: "Você está com obesidade",
            text: "Você precisa comer menos",
            icon: "error",
          })
    }
    else if (imc > 39.9){
        swal({
            title: "Você está com obesidade mórbida",
            text: "Você precisa procurar um especialista",
            icon: "error",
          })
    }
    
}
