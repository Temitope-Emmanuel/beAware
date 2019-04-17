var firstName = document.getElementById("FirstName");
var warning = document.querySelector(".warning")
var success = document.querySelector(".success")
var zemail = document.getElementById("email")
var lastName = document.getElementById("LastName")
var gender = document.getElementById("gender")
var ability = document.getElementById("Ability")
var disability = document.getElementById("Disability")
var mobile = document.getElementById("number")
var image = document.getElementById("img")
var national = document.getElementById("national")
var qualify = document.getElementById("hQualify")
var avail = document.getElementById("avail")
var file = document.getElementById("fileu")
var button = document.getElementById("submit")
var changeing = document.getElementById("dys")

// console.log(changeing)
// changeing.addEventListener("click", colorChanging)

// function colorChanging(){
//     changeing.style.backgroundColor = "purple"
// }
button.addEventListener("click",addition)
function addition(){
    var email = []
    email.push(firstName.value,zemail.value,lastName.value,
        gender.value,ability.value,disability.value,mobile.value
        ,avail.value,file.value
        )
        alert(email)
        
        window.location.href = "../html/index.html"
};
// warning.addEventListener("click",function(){
//     success.style.backgroundColor = "red"
// })
