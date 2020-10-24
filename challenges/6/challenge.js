/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = (htmlTemplate) => {
  // valores padrões
  let height = 0
  let width = 0

  // regex para buscar o termo procurado
  const regexWidth = /width:( |)[0-9]+/gm
  const regexHeight = /height:( |)[0-9]+/gm

  // procurando width
  const foundWidth = htmlTemplate.match(regexWidth)
  if (foundWidth) {
    width = parseInt(foundWidth[0].split(':')[1])
  }

  // procurando heigth
  const foundHeight = htmlTemplate.match(regexHeight)
  if (foundHeight) {
    height = parseInt(foundHeight[0].split(':')[1])
  }
  return { width, height }
}

module.exports = extractSize
