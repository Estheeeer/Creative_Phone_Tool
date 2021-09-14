// get reference
let mySlider = document.getElementById("mySlider");
let output = document.getElementById("output");

// only response to an input event
mySlider.addEventListener("change", function () {
  output.innerText = "Blurness: " + mySlider.value;
  console.log(mySlider.value);
});
