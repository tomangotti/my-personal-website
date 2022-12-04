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
