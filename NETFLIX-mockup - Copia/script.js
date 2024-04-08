var classe = document.getElementsByClassName("notification-icon")/* cicla per ogni elemento della classe .length */
for (let i = 0; i < classe.length; i++){ /* per ogni elemento della classe not-icon ci associo un eventlistener */
    classe[i].addEventListener("click", function(){
        alert("Congratulations! We have a present for you: check out gift-cards out the footer!")
    })
}
const rickRolled = document.getElementById("gift-card").addEventListener("click", function () {
    alert("OPS! You've been rickrolled");
});
