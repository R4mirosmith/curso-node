const empleados = [
    {
        id:1,
        nombre:'Ramiro'
    },
    {
        id:2,
        nombre:'Leidy'
    },
    {
        id:3,
        nombre:'shadday'
    }
];

const sueldos = [
    {
        id:1,
        salario:1000,

    },
    {
        id:2,
        salario:1500
    }
];

const getEmpleado = (id) =>{

    const empleado = empleados.find((e)=> e.id === id)?.nombre;
    const promesa = new Promise((resolve,reject)=>{
        if(empleado){
            resolve(empleado)
        }else{
            reject(`No existe empleado con id: ${id}`)
        }
    });

    return promesa;
}

const getSalario = (id)=>{

  return new Promise((resolve,reject)=>{
    const salario = sueldos.find((s)=>s.id === id)?.salario;
    if(salario){
        resolve(salario)
    }else{
        reject(`No existe salario con ese id: ${id}`)
    }
  })

}
const getInfoUsuario = async (id) =>{
    try 
       {
          const empleado = await getEmpleado(id);
          const salario = await getSalario(id);

         return `El salario del empleado: ${empleado} es: ${salario}`;
       }catch (error) {
         throw error;
    }

} 

const id = 3;
getInfoUsuario(id)
.then((e)=>console.log(e))
.catch((err)=>console.log(err))
