const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/tree-roots-on-ice.png") {
        myImage.setAttribute("src", "images/tree-roots2.png");
    } else {
        myImage.setAttribute("src", "images/tree-roots-on-ice.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} likes cool trees`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} likes cool trees`;
}

myButton.onclick = () => {
    setUserName();
};