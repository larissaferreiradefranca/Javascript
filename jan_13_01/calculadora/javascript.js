const num1 = document.querySelector("#numero1")
const num2 = document.querySelector("#numero2")
const btnSomar = document.querySelector("#somar")
const btnSubtrair = document.querySelector("#subtrair")
const btnMultiplicar = document.querySelector("#multiplicar")
const btnDividir = document.querySelector("#dividir")
const resultado = document.querySelector("#resultado")


function inputNumeros() {
    const a = Number(num1.value)
    const b = Number(num2.value)
    return [a, b]
}


btnSomar.addEventListener("click", function () {
    const [a, b] = inputNumeros()
    resultado.textContent = a + b
})

btnSubtrair.addEventListener("click", function () {
    const [a, b] = inputNumeros()
    resultado.textContent = a - b
})

btnMultiplicar.addEventListener("click", function () {
    const [a, b] = inputNumeros()
    resultado.textContent = a * b
})

btnDividir.addEventListener("click", function () {
    const [a, b] = inputNumeros()
    if (b === 0) {
        resultado.textContent = "Erro:divisão por zero"
    }
    else {
        resultado.textContent = a / b
    }
})