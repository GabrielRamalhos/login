const btnSomar = document.querySelector('#btnSomar')

btnSomar.addEventListener('click', () => {
    soma()
})

function soma() {
   const campovalor1 = document.querySelector('#valor1')
   const campovalor2 = document.querySelector('#valor2')
   const valor1 = parseInt(campovalor1.value)
   const valor2 = parseInt(campovalor2.value)
   const valorSomado = valor1 + valor2
   const campoResultado = document.querySelector('#resultado');
   campoResultado.textContent = valorSomado
}
    