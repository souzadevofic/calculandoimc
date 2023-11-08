function calcularIMC (){

    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)

    let imc = peso/((altura/100)**2)

    console.log(imc)
    let resposta = ""

    if (imc < 18.5){
        resposta = "Você está abaixo da faixa do IMC"
    }
    else if(imc < 24.9){
        resposta = "Você está na faixa de IMC esperado"
    }
    else if(imc < 39.9){
        resposta = "Você está na faixa de IMC classificado como OBESIDADE"
    }
    else{
        resposta = "Você está na faixa de IMC classificada como OBESIDADE MORBIDA"
    }

    return resposta

}

function exibirIMC(){
    let divResposta = document.getElementById("resultado_imc")
    let textoResposta = calcularIMC()

    divResposta.innerHTML= `<P>${textoResposta}</P>`
}