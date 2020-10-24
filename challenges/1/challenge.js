/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...args) => {
  // usando função de programação funcional, retorna a soma do acumulado com o valor atual
  return args.reduce((previous, current) => previous + current)
}

module.exports = sumArguments
