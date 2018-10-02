let opts = {
    descripcion:{
        demand:true,
        alias:'d'
    },
    completado:{
        alias:'c',
        default:true
    }
};
const argv = require('yargs')
    .command('crear','Crea una tarea por hacer', opts)
    .command('actualizar','Actualiza una tarea por hacer', opts)
    .command('eliminar','Elimina una tarea por hacer', opts)
    //.command('listar','lista las tareas por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}