function password() {
  document.getElementById("pass").innerHTML="Myhomestay3212";
}

function hidepassword() {
  document.getElementById("pass").innerHTML="<br>";
}


function copylocation() {
  // Get the text field
  var copyText = document.getElementById("location");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
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