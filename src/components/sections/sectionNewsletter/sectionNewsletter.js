const email = document.getElementById("mail");

document.getElementById('mail').addEventListener('input', function() {
  valido = document.getElementById('validate');
      
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test()) {
    valido.innerText = "";
  } else {
    valido.innerText = "Please enter a validate mail address";
  }
});


// 