let data = JSON.parse(localStorage.getItem("UserData"))||[];
let getdata = ()=>{
     
    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let flag=true;
  if(data.length!=0){
    data.forEach((ele)=>{
       if(ele.email==Email && ele.password==password){
           alert("Login successfully");
           localStorage.setItem("user",JSON.stringify(ele));
           flag = false;
           window.location.href="./index.html";
       }
    })
    if(flag){
        alert("please enter correct email or password!");
    }
  }else{
    alert("please Sign Up first");
    window.location.href="./signUp.html";
  }  
    
}