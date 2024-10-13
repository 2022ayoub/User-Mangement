
import {testName,testlName,testMail,testAge,testTel,testCountry,testGender} from "./validation.js";

const updform=document.getElementById("updForm");
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let confirmed = window.confirm("Do you really want to delete this user?");
    if (confirmed) {
        console.log("User confirmed deletion. Submitting the form.");
        form.submit(); 
    } else {
        console.log("User canceled deletion.");
    }
});


updform.addEventListener("submit",function(event){
    event.preventDefault();
    let err={
        vName:false,
        vlName:false,
        vMail:false,
        vTel:false,
        vAge:false,
        vGender:false,
        vCountry:false
    };

    testName(err);
    testlName(err);
    testMail(err);
    testTel(err);
    testAge(err);
    testCountry(err);
    testGender(err);

    if(!(err.vName || err.vAge || err.vMail || err.vTel || err.vlName || err.vCountry ||err.vGender)){
        updform.submit();
        // console.log("submit");
    }
});