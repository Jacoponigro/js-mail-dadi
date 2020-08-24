var email = prompt("inserisci la tua email");
var totemail = ["jakonigro@gmail.com", "jacoponigro@gmail.com", "jacopo1999@hotmail.com", "jacknigro@alice.it"];
var corretta = false;
for (var i = 0; i < totemail.length; i++) {
 if (email == totemail[i]){
   corretta = true;
 }
}
if (corretta == true) {
  document.getElementById('correct').innerHTML = "corretta";
}
else {
    document.getElementById('correct').innerHTML = "sbagliata, riprovare";
}
