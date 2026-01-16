let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} } 
else accountList = JSON.parse(acctString) 
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

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
        form.submit();
    }
});

form.addEventListener("reset", function(e) {
    if(!confirm("Clear your data?")){
        e.preventDefault();
    }
});

function changeKulay(art){
    console.log(art);
    art.style.backgroundColor = "red"
}

function resetKulay(art){
    console.log(art);
    art.style.backgroundColor = "white"
}
