// document.querySelector('.tecla_pom').onclick =()=>{
//     document.querySelector('#sonido_tecla_pom').play();
// }

const listaTeclas = document.querySelectorAll('.tecla');

function playSonido(id){
    document.querySelector(id).play()
}


for(let contador  = 0 ; contador < 9 ; contador++){
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idSound = `#sonido_${instrumento}`
    tecla.onclick = function (){
        playSonido(idSound)
    }

    tecla.onkeydown = function(e){
        if(e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.add('activa')
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa')
    }
}
