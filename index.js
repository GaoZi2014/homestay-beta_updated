function password() {
  document.getElementById("pass").innerHTML="Myhomestay3212";
}

function hidepassword() {
  document.getElementById("pass").innerHTML=" ";
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
  alert("Copied");
}