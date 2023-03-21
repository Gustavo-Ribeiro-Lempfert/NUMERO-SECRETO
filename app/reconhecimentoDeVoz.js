const elementoChute = document.getElementById('chute')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result',onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibehuteNaTela(chute)
    verificaChute(chute)
}

function exibehuteNaTela(chute){
    elementoChute.innerHTML = `<div>Vocêdisse:</div>
                     <span class="box">${chute}</span>`
}

recognition.addEventListener('end',() => recognition.start())