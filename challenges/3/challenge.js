/*
 * Calcular o MDC
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que calcula e retorna o MDC
 * (máximo divisor comum) entre dois números.
 * Para isso você pode usar as seguintes informações:
 *
 * 1. O MDC de um número N com 0 é o próprio N.
 *
 * 2. O MDC entre dois números M e N, onde M > N é
 * igual ao MDC de N e do resto da divisão de M por N.
 *
 * Você pode considerar que nas entradas dos testes
 * a > b sempre.
 */
const isPrime = require('../../utils/isPrime')

const MDC = (a, b) => {
  // decompoe cada entrada
  const decomposedA = decomposition(a)
  const decomposedB = decomposition(b)

  // separa os divisores que são comuns as duas decomposições
  const commons = Object.keys(decomposedA).filter((divisor) =>
    Object.keys(decomposedB).includes(divisor),
  )

  // resultado é a multiplicação dos divisores comuns
  return commons.reduce((accumulated, common) => {
    // quantidade em cada decomposição
    const countA = decomposedA[common]
    const countB = decomposedB[common]

    // minimo dos dois
    const min = Math.min(countA, countB)

    // retorna o acumulado vezes a quantidade vezes em comum
    return accumulated * common ** min
  }, 1) // inicia com 1, para realizar o acumulado da multiplicação
}

const decomposition = (n) => {
  // filtra os numeros primos
  const primes = [...Array(n).keys(), n].filter(isPrime)
  let decomposed = {} // saida decomposta

  let dividend = n // primeiro valor a ser dividido
  let index = 0 // posição do dividor atual
  let divider = primes[index] // primeiro divisor

  // fica dividindo até chegar a 1 ou passar por todos numeros primos
  while (dividend > 1 && index < primes.length - 1) {
    if (dividend % divider == 0) {
      if (!decomposed[divider]) {
        decomposed[divider] = 0
      }
      decomposed[divider]++
      dividend = dividend / divider // atualiza o dividendo
    } else {
      index++
      divider = primes[index] // caso não seja múltiplo, pega o proximo dividor
    }
  }
  return decomposed
}

module.exports = MDC
