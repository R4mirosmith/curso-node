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
const id = 3;

const getEmpleado = (id,callback) =>{
    const empleado = empleados.find((e)=> e.id === id)?.nombre;
    if(empleado)callback(null,empleado);
    else callback(`Empleado con id: ${id} no existe`);
}

const getSalario = (id,callback) =>{
    const salario = sueldos.find((s)=>s.id === id)?.salario;
    if(salario) callback(null,salario);
    else callback(`El sueldo con id: ${id} no existe`);
}


getEmpleado(id,(err,empleado)=>{

    if(err){
        console.log("ERROR!!!");
        return  console.log(err);
    }

    getSalario(id,(err,sueldo)=>{
        if(err){
            console.log("ERROR!!")
            return console.log(err)
        }
        console.log("El empleado:",empleado,'tiene un salario de:',sueldo)
    })
})


