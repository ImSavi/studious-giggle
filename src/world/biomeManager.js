const noise = require('./noise')

function getBiome(x, z) {
  const temp = noise.temperature(x, z)
  const humid = noise.humidity(x, z)

  if (temp > 0.5 && humid < 0) return 'desert'
  if (temp < 0 && humid > 0.3) return 'mountains'

  return 'forest'
}

module.exports = {
  getBiome
}
