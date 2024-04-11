// Get the modal
var modal = document.getElementById("myModal");

<<<<<<< Updated upstream
// Get the button that opens the modal
var text = document.getElementsByClassName("js-team-modal team-modal");
=======
// Get the trigger text
var trigger = document.getElementByClassName("js-team-modal team-modal");
>>>>>>> Stashed changes

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

<<<<<<< Updated upstream
// When the user clicks the button, open the modal 
text.onclick = function() {
  modal.style.display = "block";
=======
// When the user clicks on the trigger text, open the modal
trigger.onclick = function() {
    modal.style.display = "block";
>>>>>>> Stashed changes
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
