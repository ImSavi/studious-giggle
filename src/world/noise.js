const { createNoise2D } = require('simplex-noise')

// сид можно оставить строкой
const noise2D = createNoise2D(() => {
  let seed = 0
  for (let i = 0; i < 'utm-seed'.length; i++) {
    seed = (seed << 5) - seed + 'utm-seed'.charCodeAt(i)
    seed |= 0
  }
  return (seed = (seed * 16807) % 2147483647) / 2147483647
})

module.exports = {
  height(x, z) {
    return noise2D(x / 60, z / 60)
  },

  temperature(x, z) {
    return noise2D(x / 120 + 100, z / 120 + 100)
  },

  humidity(x, z) {
    return noise2D(x / 120 - 100, z / 120 - 100)
  },

  detail(x, z) {
    return noise2D(x / 10, z / 10)
  }
}
