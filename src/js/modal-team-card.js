// Get the modal
var modal = document.getElementById("teamModal");

// Get the button that opens the modal
var btn = document.getElementById("openTeamModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.classList.remove("is-hidden");
}

// Function to close the modal
function closeModal() {
  modal.classList.add("is-hidden");
}

// When the user clicks the button, open the modal
btn.onclick = function() {
  openModal();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
