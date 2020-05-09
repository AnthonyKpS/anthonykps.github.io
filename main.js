// Get every element from the form
document.getElementById("nameInput").addEventListener('input', validation);
document.getElementById("emailInput").addEventListener('input', validation);
document.getElementById("textInput").addEventListener('input', validation);

const submitbtn = document.getElementById("submitbtn");

let name = "";
let email = "";
let text = "";

console.log(submitbtn);

function validation() {
    
    name = document.getElementById("nameInput").value;
    email = document.getElementById("emailInput").value;
    text = document.getElementById("textInput").value;


    console.log("test");
    let nameCondition = /^[a-z ,.'-]+$/i.test(name);
    let emailCondition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    let textCondition = /[a-zA-Z0-9,#.-]+/.test(text);

    if ( name.length > 2 && nameCondition && emailCondition && text.length > 3 && textCondition) {
        submitbtn.disabled = false;
    } else {
        submitbtn.disabled = true;
    }
}



