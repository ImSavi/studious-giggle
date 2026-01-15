const rnd = require('../utils/random')

module.exports = {
  tryPlaceTree(data, x, y, z, biome) {

    if (biome !== 'forest') return

    // Вероятность появления дерева
    if (!rnd.chance(0.08)) return

    // Вариативная высота
    const height = rnd.randomInt(4, 7)

    for (let i = 0; i < height; i++) {
      const index = x + z * 24 + (y + i) * 24 * 24
      data[index] = 4   // wood
    }

    // Вариативная "крона"
    const leavesSize = rnd.randomInt(1, 3)

    for (let dx = -leavesSize; dx <= leavesSize; dx++) {
      for (let dz = -leavesSize; dz <= leavesSize; dz++) {

        const lx = x + dx
        const lz = z + dz

        if (lx < 0 || lx >= 24 || lz < 0 || lz >= 24) continue

        const top = lx + lz * 24 + (y + height) * 24 * 24
        data[top] = 5 // leaves
      }
    }
  }
}
