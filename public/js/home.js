const counters=document.querySelectorAll("table tbody tr .counter");
const bodyRows=document.querySelectorAll("table tbody tr ");

counters.forEach((item,index)=>{
    if(index %2 ==0){bodyRows[index].style.backgroundColor="rgba(0,0,0,0.05)";}
    else{bodyRows[index].style.backgroundColor="fff";}
});


