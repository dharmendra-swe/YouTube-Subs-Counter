let logo = document.querySelector("img");
let cName = document.querySelector(".cName");
let odometer = document.querySelector("#odometer");
let defauVal = odometer.textContent;
function showImg() {
    let src = prompt("Enter Your image Link");
    console.log(src);
    if (src !== null && src !== "") {
       logo.src = src;
    } else {
        alert("Please Set Valid URL");
    }
}
function showCName() {
    let name = prompt("Enter Your Channel Name");
    console.log(name);
    if (name !== null && name !== "") {
        cName.textContent = name;
    } else {
        alert("Please Set value with Valid Value");
    }
}

function setCount() {
    let inValue = prompt("Enter No. Hit Subscriber");
    if (inValue !== null && inValue !== "") {
        let value = parseInt(inValue);
        return value;
    } else {
        alert("Please enter Valid Number");
        return parseInt(defauVal);
    }
}

function showCount(){
    let comeV=setCount();
    odometer.innerHTML = comeV;
}

function startRun(){
    showImg();
    showCName();
    showCount();
}

