/*
*   JavaScriptProgramming Exercise 8
*   Controls and Events
*/
function clickHandler(){
    const inputElement = document.getElementById(`firstNameInput`);
    const target = document.getElementById(`target-p`);
    target.innerHTML = inputElement.value;
}

const button = document.getElementById("btnclickMe");
button.addEventListener(`click`, clickHandler);

/*
    Working with select and Checkbox
*/
const chkMyCheckBox = document.getElementById(`chkMyCheckBox`);
chkMyCheckBox.addEventListener(`change`, showCheckBoxState);

function showCheckBoxState(event){
    console.log(event);
    const target = document.getElementById(`checkboxState`);
    target.innerHTML = event.target.checked;
}

const vehicleMakes = document.getElementById(`vehicleMakes`);
vehicleMakes.addEventListener(`change`, vehicleMakeChange)

function vehicleMakeChange(event){
    console.log(event);
    const index = event.target.selectedIndex;
    const option = event.target.selectedOptions[0];
    const targetElm = document.getElementById(`selectedMake`);  
    
    if(index > 0){
        targetElm.innerHTML = `You selected Make: ${option.text} Id:${option.value} Index: ${index}.`;    
    }else{
        targetElm.innerHTML = "";
    }
}

// Login Handler
const loginButton = document.getElementById(`btnLogin`);
loginButton.addEventListener(`click`, loginHandler)

function loginHandler(){
    const user = document.getElementById(`userNameInput`);
    const pwd = document.getElementById(`passwordInput`);
    const pwdR = document.getElementById(`passwordRepeatInput`);
    const p = document.getElementById('login');

    if( pwd.value != pwdR.value){
        p.innerHTML = `Passwords do not match`;
    }else{
        p.innerHTML = `User: ${user.value} Pwd: ${pwd.value}`;
    }
}

const vehicleModels = document.getElementById(`vehicleModels`);
vehicleModels.addEventListener(`change`, vehicleModelsChange)

function vehicleModelsChange(event){
    const index2 = event.target.selectedIndex;
    const option2 = event.target.selectedOptions[0];
    const targetElm2 = document.getElementById(`selectedModel`);

    if(index2 > 0){
        targetElm2.innerHTML = `You selected Make: ${option2.text} Id:${option2.value} Index: ${index2}.`;    
    }else{
        targetElm2.innerHTML = "";
    }
}