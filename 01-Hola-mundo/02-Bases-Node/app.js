
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');


const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption:true,
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        console.log(argv.b)
        throw 'La base tiene que ser un número'
    }
    return true;
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    demandOption:false,
    describe:'Este valor permite listar'
})
.check((argv,options)=>{
    if(isNaN(argv.l)){
        throw 'La listar tiene que ser un boolean'
    }
    return true
})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    default:10
})
.argv;

console.clear();
 crearArchivo(argv.base,argv.listar,argv.hasta)
 .then((result)=>console.log(result))
 .catch((err)=>console.log(err))
console.log(argv,"yargs");