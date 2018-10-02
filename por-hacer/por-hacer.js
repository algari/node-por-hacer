const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{
   let data = JSON.stringify(listadoPorHacer);
   fs.writeFile('db/data.json', data, (err)=>{
       if (err) {
        throw new Error('No se pudo grabar', err);   
       }
   }) 
}

const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer = [];
    }
    
}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) =>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true)=>{
    cargarDB();
    //-1 no encontrado
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        let eliminado = listadoPorHacer.splice(index,1);
        console.log('eliminado:', eliminado);
        guardarDB()
        return eliminado;
    } else {
        return false;
    }

}

module.exports = {
    crear,getListado,actualizar,eliminar
}
