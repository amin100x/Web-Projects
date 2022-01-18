
let count = 0;
let c=document.getElementById("counter");
let b=document.getElementById("msg");
let copymsg=document.getElementById("msg").innerHTML;
function increment() {
    count++;
    c.textContent=count;
}

function save()
{
    b.textContent += " - "+count ;
    c.textContent=0;
    count=0;
}
function reset()
{
   b.innerHTML=copymsg
}