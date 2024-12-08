let btn = document.getElementById("btn")
let input = document.getElementById("todo")
let todo_list = document.querySelector(".todo-list")

let todos = []

window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach(todo => {
        addtodo(todo)
    });
}


btn.addEventListener("click",()=>{
    let length = input.value.length
    console.log(length);
    if(length<1)
        {
            alert("enter ant task")
        }
        else
        {
            todos.push(input.value)
            addtodo(input.value);
            input.value = ""
        }
        
    })
    
    
    
    
    
    function addtodo(todo)
    {
        let para = document.createElement("h1")
        para.innerText = todo
        todo_list.appendChild(para)
        localStorage.setItem("todos",JSON.stringify(todos))
        para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through"
        remove(todo)
    })
    para.addEventListener("dblclick",()=>{
        todo_list.removeChild(para)
        remove(todo)
    })
    
}


function remove(todo)
{
   let index = todos.indexOf(todo)
   localStorage.setItem("todos",JSON.stringify(todos))

   if(index>-1)
    {
        todos.splice(index,1)
    }
}