import {testName,testlName,testMail,testAge,testTel,testCountry,testGender} from "./validation.js";

const form=document.getElementById("formAdd");

form.addEventListener("submit",function(event){
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
        form.submit();
        // console.log("submit");
    }
});

