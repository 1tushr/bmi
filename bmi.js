// var fname =prompt("enter the name");

// var weight =prompt(`hey  ${fname}  enter your weight in KGs`);
// var height=prompt("enter your height now FTs");

// function bmi (weight,height){
// //convert the height in meters
// let hightInMeters=height*0.3048;
// //find the bmi
// let bmi=weight/( hightInMeters* hightInMeters);
// //round off bmi 

// let round=bmi.toFixed(2);
// return round;


// }
//  const calc=bmi(weight,height)
//  if(calc<18.5){
//     alert(`you are underweight ${fname} your BMI is ${calc} take care of your health`);
//  }
//  else if (calc>=18.5 && calc<=24.9){
//     alert(`you are Healthy Weight ${fname} your BMI is ${calc} take care of your health`);
//  }
//  else if (calc>=25.0 && calc<=29.9)
//  {
//     alert(`you are Over Weight ${fname} your BMI is ${calc} take care of your health`);
//  }

//  else if(calc>=30.0)
//  {
//     alert(`you are Over Weight ${fname} your BMI is ${calc} take care of your health`);
//  }
//  else 
//  alert('hmmmm no data found');

 
// Get the necessary elements from the DOM
const weightInput = document.querySelector('input[placeholder="Weight in KGs"]');
const heightInput = document.querySelector('input[placeholder="Height in FTs "]');
const calculateBtn = document.querySelector('#calculate');

// Add an event listener to the calculate button
calculateBtn.addEventListener('click', () => {
  // Get the user's weight and height input values
  const weight = weightInput.value;
  const height = heightInput.value;

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the result
  alert(`Your BMI is: ${bmi.toFixed(2)}`);
});
