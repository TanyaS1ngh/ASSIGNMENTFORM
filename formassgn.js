"use strict"

var elements  = {
    firstName : document.getElementById('firstName'),
    lastName : document.getElementById('lastName'),
    age : document.getElementById('age'),
    country : document.getElementById('country'),
    checkBox : document.getElementById('checkBox'),   
    submit : document.getElementById('submit'),   
}

elements.firstName.addEventListener('keypress',function(e){
    var regexfname = /^[A-Za-z]+$/;
    if(regexfname.test(e.key)){       
        // console.log(e.key);
    }
    else{
        e.preventDefault(); 
    }
    if(elements.firstName.value.length > 20){
        elements.firstName.style.borderColor = "red";
    }
})

elements.lastName.addEventListener('keypress',function(e){
    var regexlname = /^[A-Za-z]+$/;
    if(regexlname.test(e.key)){       
        console.log(e.key);
    }
    else{
        e.preventDefault(); 
    }
    if(elements.lastName.value.length > 20){
        elements.lastName.style.borderColor = "red";
    }

})
elements.age.addEventListener('keypress',function(e){
    var age_regex=/^[0-9\s]*$/;

    if(age_regex.test(e.key)){       
        console.log(e.key);
    }
    else{
        e.preventDefault(); 
    }
    if(age.value>10 ){
        e.preventDefault(); 
     }
});
elements.checkBox.addEventListener( 'change', function() {
    if(this.checked) {
        elements.submit.style.backgroundColor = "green";
        elements.submit.disabled = false;
    } else {
        elements.submit.disabled = true;
    }
});

function submit(){
    if (elements.firstName.value == "") {
        elements.firstName.style.borderColor = "red";
        customAlert("Please enter the first name",5000);
    }    
    else{
        elements.firstName.style.borderColor = "lightblue";        
    }
    if(elements.lastName.value == ""){
        elements.lastName.style.borderColor = "red";
        customAlert("Please enter the last name",5000);
    }
    else{
        elements.lastName.style.borderColor = "lightblue";
    }
    if(elements.age.value == ""){
        elements.age.style.borderColor = "red";        
        customAlert("Please enter the age",5000);
    }
    else{
        elements.age.style.borderColor = "lightblue";        
        
    }
}

function customAlert(msg, duration) {
    var styler = document.createElement("div");
    styler.setAttribute("style", "border: solid 1px lightblue; width:auto; height:auto; top:90%; left:40%; background-color:orange; color:cyan;text-align: center;display:inline");
    styler.innerHTML = "<h4>" + msg + "</h6>";
    setTimeout(function () {
        styler.parentNode.removeChild(styler);
    }, duration);
    document.body.appendChild(styler);
}