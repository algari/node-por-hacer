const argv = require('./config/yargs').argv;
const {crear,getListado,actualizar,eliminar} = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
    console.log('Crea una tarea por hacer');
    let tarea = crear(argv.descripcion)
    console.log('tarea:', tarea);
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion,argv.completado);
        console.log('actualizado:', actualizado);
        break;
    case 'listar':
        let listado = getListado();
        listado.forEach(tarea => {
            console.log('Por facer: ', tarea.descripcion , tarea.completado=='true' ? color.green(tarea.completado): color.red(tarea.completado));
        });
        break;
    case 'eliminar':
        let eliminado =  eliminar(argv.descripcion);
        console.log('Tarea eliminada: ',eliminado );
        break;    
    default:
        console.log('comando no reconocido');
} ;