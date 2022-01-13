
function gen()
{
    var image=document.createElement('img');
    var div=document.getElementById('result');
    document.getElementById("result").style.border= "1px solid black"
    image.src="https://picsum.photos/200";
    div.appendChild(image);
}
function clr()
{
    document.getElementById('result').remove();
}