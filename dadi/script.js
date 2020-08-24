var pccasuale = Math.floor(Math.random()*7);
document.getElementById('numeropc').innerHTML = pccasuale;
var personacasuale = Math.floor(Math.random()*7);
document.getElementById('numerope').innerHTML = personacasuale;
if (pccasuale > personacasuale) {
  document.getElementById('vincitore').innerHTML = "computer";
}
else if (pccasuale < personacasuale) {
  document.getElementById('vincitore').innerHTML = "persona";
}
else {
  document.getElementById('vincitore').innerHTML = "nessuno, parità";
}
