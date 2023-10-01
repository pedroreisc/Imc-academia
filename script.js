const calc = document.getElementById('calc');


function imc() {
    const name = document.getElementById('name').value;
    const alt = document.getElementById('alt').value;
    const ps = document.getElementById('ps').value;
    const result = document.getElementById('result');

    if (name !=='' && alt !=='' && ps !=='') {

        const valorimc = ( ps / (alt * alt)).toFixed(1);

        let classi = "";

        if (valorimc < 18.5){
            classi = "abaixo do peso. Procure um clínico geral!"
        } else if (valorimc < 25) {
            classi = 'Com peso está ideal, parabens!';
        } else if (valorimc < 30){
            classi = "levemente acima do peso";
        } else if (valorimc < 35){
            classi = "com obesidade grau 1 Procure um clínico geral!";
        } else if (valorimc <40){
            classi = " com obesidade grau 2 Procure um clínico geral!";
        } else if (valorimc > 40){
            classi = "com obesidade morbida. Procure um clínico geral!!";
        }

        result.textContent = `${name} seu imc é ${valorimc} e você está ${classi}`
    } else {
        result.textContent = "Preencha todos os campos! ;)"
    }
}

calc.addEventListener('click', imc);