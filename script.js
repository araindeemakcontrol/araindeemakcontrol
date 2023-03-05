
function addNewWEField(){
    // console.log("sami")
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter Your Work Experience ...")
    
    let weObj = document.getElementById('we');
    let weAddButtonObj = document.getElementById('weAddButton');

    weObj.insertBefore(newNode, weAddButtonObj);
}
function addNewAQField(){
    // console.log("sami")
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('equField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter Your Qualification ...")
    
    let aqObj = document.getElementById('aq');
    let aqAddButtonObj = document.getElementById('aqAddButton');

    aqObj.insertBefore(newNode, aqAddButtonObj);
}

// generateCV
function generateCV(){
    // console.log("sami")   
    let nameField = document.getElementById('nameField').value;
    // let contactField = document.getElementById('contactField').value;
    let nameT1 = document.getElementById('nameT1');
    let nameT2 = document.getElementById('nameT2');
    // let contactT = document.getElementById('contactT');
    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    // contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    // address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    // fbLink
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;

    // instaLink
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;

    // linkedLink
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;

    // objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;



    // we
    let wes = document.getElementsByClassName('weField');
    let str = '';
    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    // we
    let eq = document.getElementsByClassName('equField');
    let str2 = '';
    for(let e of eq){
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str2;
    
    // profile picture
    // imgField
    let file = document.getElementById('imgField').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function(){
        document.getElementById('imgT').src = reader.result;
    }


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

// printCV
function printCV(){
    window.print();
}