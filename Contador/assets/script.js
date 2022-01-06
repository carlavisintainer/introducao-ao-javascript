//Contador usando addEventListener
let counter = 0;

const valor = document.querySelector('#valor');
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {

        const estilos = e.currentTarget.classList;

        if(estilos.contains('subtrair')) {
            counter--;
        }
        else if(estilos.contains('adicionar')) {
            counter++;
        }
        else {
            counter = 0;
        }

         valor.textContent = counter;

        //troca de cor 

        if(counter > 0) {
            valor.style.color = '#000';
        }
        if(counter < 0) {
            valor.style.color = 'red';
        }
        


    })
})

//Contador original - Desafio DIO Introdução ao Javascript
//var currentNumberWrapper = document.getElementById("currentNumber")
//var currentNumber = 0;

//function increment() {
//    currentNumber = currentNumber + 1;
//    currentNumberWrapper.innerHTML = currentNumber;
//}

//function decrement() {
//    currentNumber = currentNumber - 1;
//    currentNumberWrapper.innerHTML = currentNumber;
//}
