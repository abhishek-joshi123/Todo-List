const form = document.querySelector('.form')
const newtask = document.querySelector('#newTask')
const delAll = document.querySelector('#deleteAll')
const addTsk = document.querySelector('#addtsk')
const cont = document.querySelector('.container')
const Title = document.body.querySelector('#tit')
const Description = document.body.querySelector('#des')

newtask.addEventListener('click', ()=>{
    form.style.cssText = 'display: block;'
})

cross.addEventListener('click', ()=>{
    form.style.cssText = 'display: none;'
})

let now = new Date()
let date = now.getDate().toString().padStart(2, "0");
let month = now.getMonth()+1
month = month.toString().padStart(2, "0");
let year = now.getFullYear().toString().padStart(2, "0")


addTsk.addEventListener('click', (e) => {
    
    e.preventDefault()
    let text1 = Title.value
    let text2 = Description.value

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    newDiv.innerHTML = 
        `<div class="work">
        <div class="crs">
            <button  class="cr">delete</button>
        </div>
        <h3 class="title">${text1}</h3>
        <p class="paragraph">${text2}</p>
        </div>
        <div class="date">${date}/${month}/${year}</div>`
    
    cont.appendChild(newDiv)
    form.style.cssText = 'display: none'
    Title.value = ""
    Description.value = ""

    delAll.addEventListener('click', ()=>{
        newDiv.remove()
    })

    const del = newDiv.querySelector('.cr')
    del.addEventListener('click', ()=>{
        cont.removeChild(newDiv)
    })

})

