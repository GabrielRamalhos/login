const btnSomar = document.querySelector('#btnSomar')

btnSomar.addEventListener('click', () => {
    soma()
})

function soma() {
   const campovalor1 = document.querySelector('#valor1')
   const campovalor2 = document.querySelector('#valor2')
   const campovalor3 = document.querySelector('#valor2')
   const campovalor4 = document.querySelector('#valor2')

   const valor1 = parseInt(campovalor1.value)
   const valor2 = parseInt(campovalor2.value)
   const valor3 = parseInt(campovalor3.value)
   const valor4 = parseInt(campovalor4.value)
   const valorSomado = valor1 + valor2 + valor3 + valor4
   const campoResultado = document.querySelector('#resultado');
   campoResultado.textContent = valorSomado
}
    