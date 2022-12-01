var selectMonth=document.getElementById("month");
var selectYear=document.getElementById("year");
var input=document.getElementById("inpdate");
var btn=document.getElementById("btn");

var day=document.getElementById("days")
var curryear="";
var currmonth="";


selectMonth.addEventListener('change',(e)=>{
    console.log(e.target.value);
    currmonth=e.target.value;
    renderCalender();
})

selectYear.addEventListener('change',(e)=>{
    console.log(e.target.value)
    curryear=e.target.value;
    renderCalender();
})

function renderCalender(){
   let lastdateofmonth=new Date(curryear,currmonth+1,0).getDate();
   console.log(lastdateofmonth);
   var litag="";
   for(let i=1;i<=lastdateofmonth;i++){
      litag+=`<li class="chg" id="">${i}</li>`;
   }
   day.innerHTML=litag;

}

btn.addEventListener('click',(e)=>{
    let date=input.value;
    
    var chang=document.querySelectorAll(".chg");
    console.log(chang[0]);
    for(let dta of chang){
        console.log(dta.innerHTML)
        if(date==dta.innerHTML){

            if(dta.id=="white" || dta.id=="")
              dta.setAttribute("id","green");
            else
             dta.setAttribute("id","white");
             

        }
    }

})