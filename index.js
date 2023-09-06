function password() {
  document.getElementById("pass").innerHTML="Myhomestay3212";
}

function hidepassword() {
  document.getElementById("pass").innerHTML="<br>";
}

// Auto Contop Hide JavaScript

setTimeout(() => {
  const box = document.getElementById('contop');
  box.style.display = 'none';
}, 8000);

setTimeout(() => {
  const box = document.getElementById('brcontop1');
  box.style.display = 'none';
}, 8000);

setTimeout(() => {
  const box = document.getElementById('brcontop2');
  box.style.display = 'none';
}, 8000);
