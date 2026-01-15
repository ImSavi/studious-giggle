const noise = require('./noise')
const biomes = require('./biomeManager')
const trees = require('../trees/treeGenerator')
const plants = require('../plants/plantGenerator')
const rnd = require('../utils/random')

module.exports = function generateChunk(noa, data, x, y, z) {

  const size = 24

  for (let i = 0; i < data.length; i++) {
    data[i] = 0
  }

  for (let dx = 0; dx < size; dx++) {
    for (let dz = 0; dz < size; dz++) {

      const worldX = x + dx
      const worldZ = z + dz

      const biome = biomes.getBiome(worldX, worldZ)

      let baseHeight =
        Math.floor(noise.height(worldX, worldZ) * 10 + 12)

      // Небольшая случайная вариация высоты
      baseHeight += rnd.randomInt(-1, 1)

      for (let dy = 0; dy < baseHeight; dy++) {
        const index = dx + dz * size + dy * size * size

        if (biome === 'desert') data[index] = 2
        else if (biome === 'mountains') data[index] = 3
        else data[index] = 1
      }

      trees.tryPlaceTree(data, dx, baseHeight, dz, biome)
      plants.tryPlacePlant(data, dx, baseHeight, dz, biome)
    }
  }
}
