function relogio (){
function getTimeSeconds(seconds){
  let data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}


let relogio = document.querySelector('.relogio');
let start = document.querySelector('.Start');
let pause = document.querySelector('.Pause');
let clear = document.querySelector('.Clear');
let segundos = 0;
let timer;

function startRelogio(){
  timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = getTimeSeconds(segundos);
  }, 1000); 
}

function pauseRelogio(){
  relogio.innerHTML = getTimeSeconds(segundos);
}

document.addEventListener('click', function(e) {
  const el = e.target;

  if(el.classList.contains('Start')){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    startRelogio();
  }

  if(el.classList.contains('Pause')){
    relogio.classList.add('pausado')
    clearInterval(timer);
  }

  if(el.classList.contains('Clear')){
    segundos = 0;
    clearInterval(timer);
    relogio.innerHTML = '00:00:00' 
  }

});

}
relogio();