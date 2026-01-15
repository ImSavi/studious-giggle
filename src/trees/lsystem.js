module.exports = function generateLSystem(iter = 3) {
    let axiom = "F"
  
    const rules = {
      F: "FF+[+F-F-F]-[-F+F+F]"
    }
  
    for (let i = 0; i < iter; i++) {
      axiom = axiom.split("")
        .map(c => rules[c] || c)
        .join("")
    }
  
    return axiom
  }
  