import { Engine } from 'noa-engine'

const noa = new Engine({
  debug: true,
  showFPS: true,
  chunkSize: 16
})


// ─────────────────────────────────────────────
// МАТЕРИАЛ
// ─────────────────────────────────────────────
const stoneMat = noa.rendering.makeStandardMaterial('stoneMat')
stoneMat.diffuseColor.set(0.7, 0.7, 0.7)
stoneMat.specularColor.set(0, 0, 0)

// регистрируем материал В REGISTRY
noa.registry.registerMaterial('stone', stoneMat)


// ─────────────────────────────────────────────
// БЛОК (ССЫЛКА НА МАТЕРИАЛ ПО ИМЕНИ)
// ─────────────────────────────────────────────
const STONE = noa.registry.registerBlock(1, {
  name: 'stone',
  solid: true,
  opaque: true,
  material: 'stone'
})


// ─────────────────────────────────────────────
// ГЕНЕРАЦИЯ ЧАНКОВ
// ─────────────────────────────────────────────
noa.world.on('worldDataNeeded', (id, data) => {
  const size = noa.world._chunkSize

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        if (y < 3) data.set(x, y, z, STONE)
      }
    }
  }

  noa.world.setChunkData(id, data)
})


// ─────────────────────────────────────────────
// ИГРОК
// ─────────────────────────────────────────────
noa.playerEntity.position.set(8, 6, 8)
noa.playerEntity.height = 1.8
noa.playerEntity.width = 0.6
noa.playerEntity.jumpForce = 6
noa.playerEntity.moveSpeed = 6


// ─────────────────────────────────────────────
// КАМЕРА (FPS)
// ─────────────────────────────────────────────
noa.camera.zoomDistance = 0
