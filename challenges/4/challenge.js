/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

const normalizeData = (unormalized) => {
  // usando desestruturação
  const { id, user, reports } = unormalized

  // mapea cada model
  // user
  const userMap = new Map()
  userMap.set(user.id, user)

  // reports
  const reportsMap = new Map()
  reports.forEach((report) => {
    reportsMap.set(report.id, { ...report.result, id: report.id, user: user.id })
  })

  // results
  const resultMap = new Map()
  const result = {
    id,
    user: user.id,
    reports: Array.from(reportsMap.values()).map((report) => report.id),
  }
  resultMap.set(id, result)

  // formata a saída
  const normalized = {
    results: mapToDict(resultMap),
    users: mapToDict(userMap),
    reports: mapToDict(reportsMap),
  }
  return normalized
}

// transforma um mapa para um dicionário { key : value }
const mapToDict = (map) => {
  // cria um dicionario vazio
  const dict = {}
  // para cada item do mapa
  map.forEach((value, key) => {
    // atribui a key ao respectivo value
    dict[key] = value
  })
  // retorna o dicionario
  return dict
}

module.exports = normalizeData
