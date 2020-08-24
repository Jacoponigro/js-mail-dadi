var email = prompt("inserisci la tua email");
console.log(email);
var totemail = ["jakonigro@gmail.com", "jacoponigro@gmail.com", "jacopo1999@hotmail.com", "jacknigro@alice.it"];
for (var i = 0; i < totemail.length; i++) {
  console.log(totemail[i]);
if (email == totemail[i])
  document.getElementById('correct').innerHTML = "corretto";
else
  document.getElementById('correct').innerHTML = "sbagliato, impossibile accedere, riprova";
}
