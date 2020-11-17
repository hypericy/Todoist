var addBtn = document.querySelector("#add_btn");
var ul = document.querySelector("ul");
var input = document.querySelector("#add");
function toggleDone(node){
    ul.classList.toggle("done");
}
function deleteLi(li){
    li.remove();
}
function click(){
    if(input.value.length>0) createNewItem();
}
function enter(event){
    if( input.value.length>0 && event.key==="Enter"){
        createNewItem();
    }
}
function createNewItem(){
    var li = document.createElement("li");
    li.addEventListener("click",toggleDone.bind(null,li));
    li.append(document.createTextNode(input.value+"    "));
    var del_btn = document.createElement("button");
    del_btn.textContent="Delete";
    del_btn.addEventListener("click",deleteLi.bind(null,li));
    li.append(del_btn);

    ul.appendChild(li);
    input.value="";
} 

addBtn.addEventListener("click",click);

input.addEventListener("keypress",enter);