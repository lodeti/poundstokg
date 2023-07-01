function start(){
    var inputWeight = document.querySelector('#input-weight');
    var outputKg = document.querySelector('#final');

    inputWeight.addEventListener('input', handleButtonClick);
    outputKg.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function poundsToKg(weight){
    return weight / 2.205;
}

function handleButtonClick(){
    var inputWeight = document.querySelector('#input-weight');
    var outputKg = document.querySelector('#final');

    var weight = Number(inputWeight.value);
    var final = poundsToKg(weight);
    var finalKG = final.toFixed(2)

    outputKg.textContent = finalKG;
}

start()