let mensaje: string = "Hola Mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])
/**
 * tipos de JS
 * number
 * string
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de TS
* any <- no usarlo!
* unknown
* never
* arrays
* tuplas
* Enums

* Tipos inferidos
* 
*
 */

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

/*
nunca dejar sin inicializar  una variable y su tipo */
let mivariable
mivariable = "chanchito feliz"
mivariable = 42


function chanchitoFeliz(config:any){
    return config
}


/**Tipo array
 * 
 */
let animales: string[] =['chanchito', 'feliz', 'Felipe']
let nums: number[] =[1,2,3]
let checks: boolean[] =[]
let nums2: Array<number> = []


//nums.map(x => x.) // el autocompletado sugiere metodo del tipo de dato 

//Tuplas

let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]
//tupla.push(12)

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

 
//enum Talla{Chica=2, Mediana, Grande, ExtraGrande}

enum Talla{Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success;

//OBJETO
/*const objeto = { id: 1, nombre: ''}
objeto.nombre = 'Hola Mundo'*/

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona ={
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = {
    id: 1, 
    nombre:'Hola mundo', 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = []