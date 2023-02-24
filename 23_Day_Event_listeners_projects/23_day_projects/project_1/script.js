
s=document.getElementById("enter")
s.addEventListener("click",ab)
div=document.querySelector(".container")

function ab()
{
ele=document.querySelector("input[type='text']")

if(typeof(Number(ele.value)===Number) && Number(ele.value)>0)
{
div.innerHTML=""
let v=ele.value
//console.log(v)
for(let i=0 ;i<v;i++)
{   
    if(i%2==0)
    {
    let box=document.createElement("div")
    box.textContent=i;
    box.style.width = "150px";
    box.style.height = "120px"
    box.style.backgroundColor = "green"
    box.style.margin = "8px";
    div.appendChild(box)
    }
    else{
        let box=document.createElement("div")
        box.textContent=i;
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "yellow"
        box.style.margin = "8px";
        div.appendChild(box)

    }
    
}
}

}