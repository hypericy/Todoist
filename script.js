var addBtn = document.querySelector("#add_btn");
var ul = document.querySelector("ul");
var input = document.querySelector("#add");
function toggleDone(node){
    node.classList.toggle("done");
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
//-----------------background-------------------
addBtn.addEventListener("click",click);
input.addEventListener("keypress",enter);

var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
function init(){
    // body.style.background= "linear-gradient(to right ,red , yellow)";
    body.setAttribute("style",`background :linear-gradient(to right ,#ffb5af , #cbf0ff)`);
    css.innerHTML = "Background : #ffb5af , #cbf0ff"; 
}
function setGradient(element){
    //body.style.background = `linear-gradient(to right ,${color1.value} , ${color2.value})`;
    body.setAttribute("style",`background :linear-gradient(to right ,${color1.value} , ${color2.value})`);
    css.innerHTML = `Background : ${color1.value} , ${color2.value}`; 
}; 

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
init();