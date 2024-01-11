let multiStepForm = document.querySelector("[data-multi-step]");
let multiSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let cir_num = [...document.getElementsByClassName("cir-num")];
let currentpage;

currentpage = multiSteps.findIndex(step => {
    return step.classList.contains("active");
})

cir_num[0].setAttribute("style", "background-color:grey;");

if(currentpage < 0){
    currentpage=0;
    showCurrentStep();
}

multiStepForm.addEventListener("click",e => {
    if(e.target.tagName == "INPUT"){
        // console.log(e.target);
    let increment;

    if(e.target.matches("[data-next]")){
        // console.log(e.target.tagName);
        increment=1;
    }else if(e.target.matches("[data-previous]")){
        increment=-1;
    }
   
    currentpage +=increment;

    if(increment == null || currentpage>2 || currentpage<0) {
        return
    }
    console.log(currentpage);
    multiSteps.forEach((step,index) => {
        if(currentpage === index){
            cir_num[index].setAttribute("style","background-color:grey;");
            console.log(index);
        }else{
            cir_num[index].removeAttribute("style");
        }
        
        step.classList.toggle("active",currentpage === index)
    })
    }
})

function showCurrentStep(){
    multiSteps.forEach((step,index) =>{
        step.classList.toggle("active",index === currentpage);
    })
}