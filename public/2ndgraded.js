
/*const clubInput = document.getElementById("club");
const idstudInput = document.getElementById("idstud");
const fullnameInput = document.getElementById("fullname");
const levelInput = document.getElementById("level");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const IntextInput = document.getElementById("Intext");

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    //localStorage.setItem("students", JSON.stringify(students));
    //window.location.href = "Q3_3GMgPauig.html";


    if (confirm("Save your info?")){

        const data = new FormData(form);
        const obj = Object.fromEntries(data.entries());

        accountList[obj.uname] = {};
        for (let key in obj){
            if (key != "uname") {
                accountList[obj.uname][key] = obj[key];
            }
        }

        console.log(accountList)
        acctString = JSON.stringify(accountList)
        localStorage.setItem("accounts", acctString)
        //add
        localStorage.setItem("students", JSON.stringify(students));
        window.location.href = "Q3_3GMgPauig.html";
    }


form.addEventListener("reset", function(e) {
    if(!confirm("Clear your data?")){
        e.preventDefault();
    }
});*/

//since there were problems with my code I added this just to see if it does something
const form = document.getElementById("form");
console.log(form);
//get the elements from the form for the 3rd graded
if (form) {
  const clubInput = document.getElementById("club");
  const idstudInput = document.getElementById("idstud");
  const fullnameInput = document.getElementById("fullname");
  const levelInput = document.getElementById("level");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");
  // for submitting!!
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!confirm("Save your info?")) return;

    const intext = document.querySelector('input[name="intext"]:checked');
    const exinternValue = intext ? intext.value : "";
    //for the 3rd graded
    const student = {
      club: clubInput.value,
      id: idstudInput.value,
      name: fullnameInput.value,
      level: levelInput.value,
      email: addressInput ? addressInput.value : "",
      number: phoneInput.value,
      exintern: exinternValue
    };
    //local storage save
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));
    window.location.href = "Q3_3GMgPauig.html";
  });

  form.addEventListener("reset", function (e) {
    if (!confirm("Clear your data?")) {
      e.preventDefault();
    }
  });
} else {
  console.log('No form on this page');
}

/*const clubInput = document.getElementById("club");
const idstudInput = document.getElementById("idstud");
const fullnameInput = document.getElementById("fullname");
const levelInput = document.getElementById("level");
const phoneInput = document.getElementById("phone");
const intextInput = document.getElementById("intext");*/


const clubInput = document.getElementById("club");
const idstudInput = document.getElementById("idstud");
const fullnameInput = document.getElementById("fullname");
const levelInput = document.getElementById("level");
const phoneInput = document.getElementById("phone");
//for color in the boxes
    console.log(art);
    art.style.backgroundColor = "red"


function resetKulay(art){
    console.log(art);
    art.style.backgroundColor = "white"
}



