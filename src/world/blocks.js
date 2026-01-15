module.exports = function registerBlocks(noa) {

    const textures = require('../textures/textureGenerator')
  
    const generated = textures.generateAll()
  
    noa.registry.registerMaterial('grass', generated.grass)
    noa.registry.registerMaterial('sand', generated.sand)
    noa.registry.registerMaterial('stone', generated.stone)
  
    noa.registry.registerBlock(1, { name: 'grass', material: 'grass' })
    noa.registry.registerBlock(2, { name: 'sand', material: 'sand' })
    noa.registry.registerBlock(3, { name: 'stone', material: 'stone' })
    noa.registry.registerBlock(4, { name: 'wood', material: 'stone' })
    noa.registry.registerBlock(5, { name: 'leaves', material: 'grass' })
  }
  