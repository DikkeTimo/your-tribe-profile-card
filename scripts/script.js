const expandButton = document.querySelector("header button");
expandButton.addEventListener("click", expand);

function expand() {
  document.body.classList.toggle("expand");
}

function myFunction() {
  var x = document.getElementById("card2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
