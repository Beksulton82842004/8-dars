const todos = [ 
    {
        id: 0,
    title: "kitob o'qish",
    created: "08.07.2023",
    isDone: false
}, 
 {
    id: 1,
    title: "kitob o'qish",
    created: "08.07.2023",
    isDone: false
},
{
    id: 2,
    title: "kitob o'qish",
    created: "08.07.2023",
    isDone: false
},]

const elName = document.querySelector(".input-name");
const elDate = document.querySelector(".input-date");
  const elForm = document.querySelector("#form")
 const elCards = document.querySelector(".cards");

 function renderTodos(todos,elCards){
    for(let i = 0 ; i< todos.length; i++){
        const newCard = document.createElement("div")
     newCard.className = "card p-3 mt-3" 
     newCard.innerHTML= ` 
     <div class="card-title"> ${todos[i].title} </div> 
     <p> ${todos[i].created} </p>
     `  
     elCards.appendChild(newCard)     
     }
 }

 renderTodos(todos,elCards)

 elForm.addEventListener ("submit", function(evt) {
    evt.preventDefault();
    if(elName.value !== ""){ 
        elCards.innerHTML = ""

        const newTodo = {
            id: todos.length,
            title: elName.value ,
            created: elDate.value,
            isDone: false
        }

        todos.push(newTodo)
       
        renderTodos(todos,elCards)

      
       elForm.reset()
    } else {
        alert(`error`)
    }


}  ) 