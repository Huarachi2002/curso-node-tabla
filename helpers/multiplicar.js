const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 1,listar =false,hasta = 10) =>{
    return new Promise((resolve,reject) => {
        let salida ='';
        for(var i=1;i<=hasta;i++){
            salida+= `${base}`.red+' x '.white + `${i}`.yellow + ' = '.white + `${base*i}`.green+'\n';
        }
        if(listar)
            console.log(salida);
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        resolve(`tabla-${base}.txt`)
        reject('No se pudo crear el Archivo')
    });

}
module.exports = {
    crearArchivo
}