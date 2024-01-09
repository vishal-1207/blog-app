let multiStepForm = document.querySelector("[data-multi-step]");
let multiSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentpage;

currentpage = multiSteps.findIndex(step => {
    return step.classList.contains("active");
})

if(currentpage < 0){
    currentpage=0;
    showCurrentStep();
}

multiStepForm.addEventListener("click",e => {
    console.log(e.target);
    let increment;

    if(e.target.matches("[data-next]")){
        increment=1;
    }else if(e.target.matches("[data-previous]")){
        increment=-1;
    }
   
    currentpage +=increment;

    if(increment == null || currentpage>2 || currentpage<0) {
        return
    }
    multiSteps.forEach((step,index) => {
        step.classList.toggle("active",currentpage === index)
    })
})

function showCurrentStep(){
    multiSteps.forEach((step,index) =>{
        step.classList.toggle("active",index === currentpage);
    })
}