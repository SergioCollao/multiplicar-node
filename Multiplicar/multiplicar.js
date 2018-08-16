const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un nùmero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un nùmero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un nùmero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un nùmero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        }

        resolve(`El resultado de la aplicacion base =${base} y limite=${limite} es \n${data}`);

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}