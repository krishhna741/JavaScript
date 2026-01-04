
//approch1 ............
// const form = document.querySelector('form');

// form.addEventListener('submit',function (e) {
//   e.preventDefault(); // page reload rokne ke liye


// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);
// const result = document.querySelector('#results');

// if (height === '' || height <= 0 || isNaN(height)) {
//     result.textContent= `please enter a valid height ${height}`;

// }
// if (weight === '' || weight <= 0 || isNaN(weight)) {
//     result.textContent = `please enter a valid height ${weight}`;
// }

// const bmi = (weight / ((height * height) / 10000)).toFixed(2);

// let guide = "";
// if (bmi < 18.6) {
//     guide = "Under weight";    
// } else if (bmi >= 18.6 && bmi <= 24.9) {
//     guide = "Normal Range"
// }else{
//     guide = "Overweight";
// }

// //show the result.....
// result.innerHTML = `<span> BMI: ${bmi} (${guide})</span>`;
// })



//approch 2...............

const form = document.querySelector('form');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //  Invalid height
  if (isNaN(height) || height <= 0) {
    results.textContent = "Please enter a valid height";
    return; //  yahin ruk jao
  }

  //  Invalid weight
  if (isNaN(weight) || weight <= 0) {
    results.textContent = "Please enter a valid weight";
    return; //  yahin ruk jao
  }

  //  Valid case (sirf yahin BMI calculate hoga)
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let message = "";
  if (bmi < 18.6) {
    message = "Under Weight";
  } else if (bmi <= 24.9) {
    message = "Normal Range";
  } else {
    message = "Overweight";
  }

  results.innerHTML = `<span>BMI: ${bmi} (${message})</span>`;
});

