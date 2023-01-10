var button = document.getElementById("color-changer");

button.addEventListener("click", function() {
  var colors = ["red", "green", "blue", "purple", "orange"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
