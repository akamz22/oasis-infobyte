let result = document.getElementById('inputtxt');

let calculate=(number)=>{
    result.value += number;
}

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err)
    {
        alert("Enter the valid expression");
        clr()
    }
}

function clr()
{
    result.value = " ";
}
function del()
{
    result.value = result.value.slice(0,-1);
}
const change = document.getElementById('calc')
const cntr = document.getElementById('container')
const indi = document.querySelectorAll(".key")
const drk = document.getElementById('drk');
// console.log(indi)
function darkmode(){
    change.classList.toggle('darkbg');
    cntr.classList.toggle('darkbg');
    drk.classList.toggle('darkbg');
    for (var i = 0; i < indi.length; i++) {
        indi[i].classList.toggle('darkbg');
    }
    result.classList.remove('textinput');
    result.classList.toggle('darkinput');
}
var input = document.getElementById("inputtxt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("res").click();
  }
});