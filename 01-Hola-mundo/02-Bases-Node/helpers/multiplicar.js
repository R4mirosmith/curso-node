const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async (base = 5,listar,hasta)=>{

    try {

      
      let salida ="";
      for (let i = 1; i <= hasta; i++) {
        salida+=`${base} x ${i} = ${base * i}\n`;
      }

      if(listar){
        console.log(colors.yellow("===================================="))
        console.log(colors.yellow(`Tabla de multiplicar del: ${colors.green(base)}`))
        console.log(colors.yellow("===================================="))
        console.log(salida)
      }
        fs.writeFileSync(`files/tabla-${base}.txt`,salida);
          return colors.green(`tabla-${base}.txt creado`);
    } catch (error) {
        throw error
    }
    

}

module.exports = {
    crearArchivo
}