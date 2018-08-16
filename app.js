const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(listado => console.log(listado)).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo Creado: ${archivo}`)).catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(argv.limite);

// console.log(argv);
// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
// let argv2 = process.argv;