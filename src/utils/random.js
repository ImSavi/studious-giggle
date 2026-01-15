let seed = 12345

function setSeed(s) {
  seed = s
}

// Простая функция псевдослучайных чисел (LCG)
function random() {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}

function randomRange(min, max) {
  return random() * (max - min) + min
}

function randomInt(min, max) {
  return Math.floor(randomRange(min, max + 1))
}

function chance(probability) {
  return random() < probability
}

module.exports = {
  setSeed,
  random,
  randomRange,
  randomInt,
  chance
}
