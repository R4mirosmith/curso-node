
const getUsuarioByID =(id,callback)=>{
    const usuario = {
        id,
        nombre:"Ramiro"
    }
    setTimeout(() => {
        callback(usuario)
    }, 1500);
}


getUsuarioByID(10,(usuario)=>{
    console.log(usuario)
});