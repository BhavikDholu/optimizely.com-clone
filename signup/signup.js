

let form = document.querySelector("form")
form.addEventListener("submit",getdata);
let data = JSON.parse(localStorage.getItem("UserData"))||[]; 

function getdata(){
    event.preventDefault();
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;

    let user = {
        name,
        email,
        password
    }
   data.push(user);
   localStorage.setItem("UserData",JSON.stringify(data));
    
}