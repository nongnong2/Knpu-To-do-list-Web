const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';

var toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }) // filter는 array에서 true인 것으로만 새 array생성
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //js는 localstorage에 string만 저장하려해서 Json stringfy호 형변환 
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
        };    
    toDos.push(toDoObj);
    saveToDos();
    }

function handleSubmit(event){
    event.preventDefault();
    const currentvalue = toDoinput.value;
    paintToDo(currentvalue);
    toDoinput.value = "";
}

function loadToDos(){
    const loaded_toDos = localStorage.getItem(TODOS_LS);
    if(loaded_toDos !== null){
        const parsedToDos = JSON.parse(loaded_toDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init()