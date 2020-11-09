//document.getElementById("hh").innerHTML = "changed"

const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^(\+)([0-9]){11,15}$/,
  username: /^[a-z0-9]{5,12}$/i,
  password:/^[\w@-]{8,12}$/i,
  email: /^([a-z0-9\.-]+)@([a-z0-9-]+)(\.)([a-z]{2,8})$/ //the ""+"" sign says: at least 1 char long till infinite
  // email consists of 4 parts
  // 1) yourname consisting of letters, numbers, dots, and/or "-"
  // 2) the @-symbol
  // 3) domain like e.g.: gmail
  // 4) .de or .com etc
  
};

//validation function
function validate (field, regex) {
  if(regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid"
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])
  });
});










// // attach an event listener to every input field
// const inputs = document.querySelectorAll("input") //this is an HTML collections -> all inputs stored in the variable inputs

// const patterns = {
//   telephone: /^[0-9]{11}$/g //alternative: /^\d{11}$/
// };


// // you have to add an event listener on every input field. It is not possible to attach an event listener to an HTML collection. Therefore you have to loop through the HTML collection and attach is seperatly

// inputs.forEach((input) => {
//   input.addEventListener('keyup', (e) => {
//   console.log(e.target.attributes.name)
 
//   });
// });


// document.getElementById("hh").innerHTML = "Paragraph changed!";