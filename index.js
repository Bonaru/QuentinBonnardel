alert('Bienvenue !');
confirm('ça va ?');
prompt("comment t'appelles tu ?")
let caVa = confirm('ca va ?');
alert(caVa); 
let isDarkMode = confirm("Veux tu passer en mode dark ?");

if (isDarkMode) {
    document.getElementById('presentation').style.backgroundColor = "#002500";
    document.getElementById('presentation').style.color = "#FFFFFF";

}
let listElementNav = document.getElementsByTagName('nav');
let elementNav = listElementNav[0];

elementNav.style.position = 'absolute';

let y = 0;
setInterval(function () {
  y++;
  elementNav.style.top = y + "px";
}, 10);

