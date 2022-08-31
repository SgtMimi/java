class Tarea {
    constructor( nombre , categoria , descripcion ) {
        
        this.nombre = nombre
        this.categoria = categoria
        this.descripcion = descripcion
        
    }
}

let tareas = []

if(localStorage.getItem('tareas')) { 
    tareas =  JSON.parse(localStorage.getItem('tareas')) 
} else {
    localStorage.setItem('tareas', JSON.stringify(tareas)) 
}


const form = document.getElementById("idForm")

const botonTareas = document.getElementById("botonTareas")

const divTareas = document.getElementById("divTareas")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const datForm=new FormData(e.target)
    console.log (datForm.get("nombre") , datForm.get("categoria"), datForm .
    get("descripcion"))
    
    const nombre = document.getElementById("idNombre").value
    
    const categoria = document.getElementById("idCategoria").value
    
    const descripcion = document.getElementById("idDescripcion").value

    console.log(nombre, categoria, descripcion)
})

    

  
    
    
    

    
   
    

    