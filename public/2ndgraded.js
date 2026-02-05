
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
alert("JS IS RUNNING AND ALIVE");

const form = document.getElementById("form");
console.log(form);

if (form) {
  const clubInput = document.getElementById("club");
  const idstudInput = document.getElementById("idstud");
  const fullnameInput = document.getElementById("fullname");
  const levelInput = document.getElementById("level");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!confirm("Save your info?")) return;

    const intext = document.querySelector('input[name="intext"]:checked');
    const exinternValue = intext ? intext.value : "";

    const student = {
      club: clubInput.value,
      id: idstudInput.value,
      name: fullnameInput.value,
      level: levelInput.value,
      email: addressInput ? addressInput.value : "",
      number: phoneInput.value,
      exintern: exinternValue
    };

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
  console.log('No form on this page; skipping form event listeners.');
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
/* (old submit/reset handlers replaced by guarded handlers above) */
    console.log(art);
    art.style.backgroundColor = "red"


function resetKulay(art){
    console.log(art);
    art.style.backgroundColor = "white"
}



