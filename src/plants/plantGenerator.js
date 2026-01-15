const rnd = require('../utils/random')

module.exports = {
  tryPlacePlant(data, x, y, z, biome) {

    if (biome === 'desert') return

    // Плотность зависит от биома
    let probability = 0.15

    if (biome === 'mountains') probability = 0.05
    if (biome === 'forest') probability = 0.25

    if (!rnd.chance(probability)) return

    const index = x + z * 24 + y * 24 * 24
    data[index] = 5
  }
}
