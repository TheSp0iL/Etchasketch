const cdiv = document.querySelector('.container');
let anzahl = 16
let input = anzahl*anzahl;
let size = (800-anzahl*2)/anzahl;

for (let number = 0; number < input; number++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black";
    div.style.width = size + "px";
    div.style.height = size + "px"; 
    div.classList.add("mystyle")
    cdiv.appendChild(div);    
}

let divColor = document.getElementsByClassName("mystyle");
divColor.addEventListener("mouseover", ()=>{
    func();
})

function func() {
var item = document.getElementsByClassName("mystyle");
item.setAttribute("style", "background-color:blue;");
}
https://forum.freecodecamp.org/t/adding-an-event-listener-to-dynamically-created-elements/185906
