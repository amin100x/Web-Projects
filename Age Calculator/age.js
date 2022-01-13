

function ageInDays()
{
    var birthyear=prompt('Enter your bitrhyear ? ');
    var day=(2022- birthyear)*365;
    var h1=document.createElement("h1");
    var textAnswer=document.createTextNode('Your age in days is '+ day + '.');
    h1.setAttribute('id' , 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('days').appendChild(h1);

}

function rev() {
    var myobj = document.getElementById("ageInDays");
    myobj.remove();
  }