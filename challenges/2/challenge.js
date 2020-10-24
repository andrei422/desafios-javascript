/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

const isPrime = require('../../utils/isPrime')

const sumPrimes = n => {
  // cria um array de 0 até n
  const array = [...Array(n).keys(), n]

  // retorna a soma dos números primos
  return array.reduce((previous, current) =>
    // se for primo, retorna o acumulado mais o atual
    // se não for primo, retorna o acumulado
    isPrime(current) ? previous + current : previous,
  )
}
module.exports = sumPrimes
