const deadpool = {
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    edad:'50',
    getNombre(){
        return `${this.nombre} ${this.apellido}`;
    }
}



function imprimeHeroe({nombre, apellido, poder,edad}){
    console.log(nombre, apellido, poder, edad)
}

// imprimeHeroe(deadpool)
const heroes = ["DeadPool","Superman","Batmant"];
const [,,h3] = heroes;
console.log(h3);