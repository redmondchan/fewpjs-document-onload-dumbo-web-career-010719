// Your code goes here

function domContentLoaded(){
  document.addEventListener("DOMContentLoaded", function(event) {
    updateDOM()
  })
}

function updateDOM(){
  document.getElementById("text").textContent = "This is really cool!"
}
