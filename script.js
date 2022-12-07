/*NAV BUTTON OPTIONS*/

const career = document.getElementById('career.change');
const aboutMe = document.getElementById('about.me');
const workExp = document.getElementById('work.exp');
const edu = document.getElementById('edu');
const project = document.getElementById('myProjects');

career.style.display = "none";
aboutMe.style.display = "";
workExp.style.display = "none";
edu.style.display = "none";
project.style.display = "none"

function myCareer(){
    career.style.display = "";
    aboutMe.style.display = "none";
    workExp.style.display = "none";
    edu.style.display = "none";
    project.style.display = "none";
};

function myAboutMe(){
    career.style.display = "none";
    aboutMe.style.display = "";
    workExp.style.display = "none";
    edu.style.display = "none";
    project.style.display = "none";
};

function myWorkExp(){
    career.style.display = "none";
    aboutMe.style.display = "none";
    workExp.style.display = "";
    edu.style.display = "none";
    project.style.display = "none";
};

function myEdu(){
    career.style.display = "none";
    aboutMe.style.display = "none";
    workExp.style.display = "none";
    edu.style.display = "";
    project.style.display = "none";
};

function myProjects(){
    career.style.display = "none";
    aboutMe.style.display = "none";
    workExp.style.display = "none";
    edu.style.display = "none";
    project.style.display = "";
};


/*NAV BUTTON OPTIONS*/


/*Construction worker walking*/

let nIntervID;

function changeImage() {
    if(!nIntervID) {
        nIntervID = setInterval(flashImage, 1000);
    }
}

function flashImage() {
    const oColor = document.getElementById("test1");
    
    if(oColor.style.color === "red"){
        oColor.style.color = "blue";
    } else if(oColor.style.color === "blue"){
        oColor.style.color = "green";
    } else {
        oColor.style.color = "red";
    }
}

document.getElementById("career.change.button").addEventListener("click", changeImage);




/*Construction worker walking*/