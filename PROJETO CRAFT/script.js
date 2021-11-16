var weight_1, weight_2, weight_3, weight_4, weight_5;

function calc_weight(){  /* Pegar os valores e guardar*/
    weight_1 = parseFloat(window.document.getElementById('headwear').value); 
    weight_2 = parseFloat(window.document.getElementById('chestwear').value); 
    weight_3 = parseFloat(window.document.getElementById('glove').value); 
    weight_4 = parseFloat(window.document.getElementById('legwear').value); 
    weight_5 = parseFloat(window.document.getElementById('footwear').value);

    weight_total = weight_1 + weight_2 + weight_3 + weight_4 + weight_5
    if (weight_total <= 15 ){
        return [weight_total, 'leve']
    }
    else if (weight_total <= 30 && weight_total > 15){
        return [weight_total, 'médio']
    }
    else {
        return [weight_total, 'pesado']
    }
}

function calc_material_amount(){
    console.log('1,2,3')
}

function display_html(){    
    /* Imprimir no HHTML o resultado */
    document.
}

function calc(){
    calc_weight() /// CALCULA O PESO
    window.location.href = "calc.html";

    /* Calcular a quantidade de recursos e o peso */
}



