// choose gender
let gender = document.getElementById("gender");
let female = gender.childNodes[1];
let male = gender.childNodes[3];
let femaleAvatar = document.getElementById("female-avatar");
let maleAvatar = document.getElementById("male-avatar");

female.addEventListener("click", function () {
  femaleAvatar.style.display = "block";
  maleAvatar.style.display = "none";
});

male.addEventListener("click", function () {
  maleAvatar.style.display = "block";
  femaleAvatar.style.display = "none";
});

// getting values
let details = document.querySelectorAll("input");
let weight = details[0];
let height = details[1];
let age = details[2];

// calculate the bmi
function bmi() {
  let weightValue = parseFloat(weight.value);
  let heightValue = parseFloat(height.value);
  let heightInches = heightValue * 0.304;
  let bodyIndex = weightValue / (heightInches * heightInches);
  let rounder = bodyIndex.toFixed(2);
  alert(`Your BMI is: ${rounder}`);
}

// call function on click of the button
let calculate = document.getElementById("calculate");
calculate.addEventListener("click", bmi);


