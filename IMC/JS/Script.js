function MyFunction(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value / 100;

    var imc = weight / height**2;

    var txt = "";
    if(imc < 18.5){
        txt = "Abaixo do Peso";
    }else if(imc >= 18.5 && imc <= 24.9){
        txt = "Peso Normal";
    }else if(imc >=25 && imc <=29.9){
        txt = "Sobrepeso"
    }else if(imc >= 30 && imc < 34.9){
        txt = "Obesidade Grau 1";
    }else if(imc >=35 && imc <= 39.9){
        txt = "Obesidade Grau 2";
    }else if(imc > 40){
        txt = "Obesidade Grau 3 ou Mórbida";
    }

    document.getElementById('text_Area').innerText = txt;

}

var btn = document.querySelector('#refresh');
btn.addEventListener("click", function(){
    location.reload();
});