function makeTexture(color) {
    const canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 16
  
    const ctx = canvas.getContext('2d')
  
    ctx.fillStyle = color
    ctx.fillRect(0, 0, 16, 16)
  
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.2})`
      ctx.fillRect(
        Math.random() * 16,
        Math.random() * 16,
        2, 2
      )
    }
  
    return canvas
  }
  
  module.exports = {
    generateAll() {
      return {
        grass: makeTexture('#3fa34d'),
        sand: makeTexture('#d9c38a'),
        stone: makeTexture('#777777')
      }
    }
  }
  