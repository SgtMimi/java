class Tarea {
    
    constructor(nombre, categoria, descripcion) {
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
    
    const datForm = new FormData(e.target)

    const tarea = new Tarea(datForm.get("nombre"), datForm.get("categoria"), datForm.get("descripcion"))
  /*  asdsadasd   */
    tareas.push(Tarea)

    localStorage.setItem('tareas', JSON.stringify(tareas))

    form.reset()


})

botonTareas.addEventListener('click', () => {
    const tarStorage = JSON.parse(localStorage.getItem('tareas'))

    divTareas.innerHTML = ""
    tarStorage.forEach((tarea, indice) => {
        divTareas.innerHTML += `
            <div class="card bg-light mb-3" id="tarea${indice}" style="max-width: 20rem;margin:8px;">
                <div class="card-header"><h2>${tarea.nombre}<h2></div>
                <div class="card-body">
                    <p class="card-title">${tarea.categoria}</p>
                    <p class="card-text">${tarea.descripcion}</p>
                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        
        `
    })

    tarStorage.forEach((tarea, indice) => {

        const tarjeTarea = document.getElementById(`tarea${indice}`)

        tarjeTarea.children[1].children[2].addEventListener('click', () => {
            tarjeTarea.remove()
            tareas.splice(indice, 1)
            localStorage.setItem('tareas', JSON.stringify(tareas))
            console.log(`${tarea.nombre}Eliminada`)
        })
    })


})

    

  
    
    
    

    
   
    

    