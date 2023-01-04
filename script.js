/////////////////////////////////////////
///////// Nav button ////////////////////
/////////////////////////////////////////

const structProject = document.getElementById('civil');
const aboutMe = document.getElementById('about.me');
const workExp = document.getElementById('work-exp');
const edu = document.getElementById('edu');
const softProject = document.getElementById('software');

const btnAboutMe = document.querySelector('#about-me-button');
const btnWork = document.querySelector('#work-exp-button');
const btnEdu = document.querySelector('#edu-button');
const btnSoftware = document.querySelector('#software-button');
const btnStructural = document.querySelector('#structural-button');

btnAboutMe.addEventListener('click', ()=> {
    myAboutMe();
});
btnWork.addEventListener('click', () => {
    myWorkExp()
});
btnEdu.addEventListener('click', () => {
    myEdu()
});
btnSoftware.addEventListener('click', () => {
    codingProjects()
});
btnStructural.addEventListener('click', () => {
    structProjects()
});


structProject.style.display = "none";
aboutMe.style.display = "";
workExp.style.display = "none";
edu.style.display = "none";
softProject.style.display = "none"

function structProjects(){
    structProject.style.display = "";
    aboutMe.style.display = "none";
    workExp.style.display = "none";
    edu.style.display = "none";
    softProject.style.display = "none";
};

function myAboutMe(){
    structProject.style.display = "none";
    aboutMe.style.display = "";
    workExp.style.display = "none";
    edu.style.display = "none";
    softProject.style.display = "none";
};

function myWorkExp(){
    structProject.style.display = "none";
    aboutMe.style.display = "none";
    workExp.style.display = "";
    edu.style.display = "none";
    softProject.style.display = "none";
};

function myEdu(){
    structProject.style.display = "none";
    aboutMe.style.display = "none";
    workExp.style.display = "none";
    edu.style.display = "";
    softProject.style.display = "none";
};

function codingProjects(){
    structProject.style.display = "none";
    aboutMe.style.display = "none";
    workExp.style.display = "none";
    edu.style.display = "none";
    softProject.style.display = "";
};


////////////////////////////////////////////
////////// Render Job Cards ////////////////
////////////////////////////////////////////
jobs.forEach(renderJobs);

function renderJobs(job){
    let title = document.createElement('h3');
    let company = document.createElement('h4');
    let year = document.createElement('h4');
    let responsibilities = document.createElement('p');
    let innerDiv = document.createElement('div')
    innerDiv.className = 'jobs';

    title.textContent = job.title;
    company.textContent = job.company;
    year.textContent = job.year;
    responsibilities.textContent = job.responsibilites;

    let div = document.querySelector('#work-exp')

    div.append(innerDiv);
    innerDiv.append(title, company, year, responsibilities);

}

////////////////////////////////////////////
////////// Render School Cards /////////////
////////////////////////////////////////////

education.forEach(renderSchool)

function renderSchool(education) {
    let school = document.createElement('h3');
    let year = document.createElement('h4');
    let description = document.createElement('p');
    let innerDiv = document.createElement('div')
    innerDiv.className = 'school';

    school.textContent = education.school;
    year.textContent = education.year;
    description.textContent = education.description;

    
    edu.append(innerDiv);
    innerDiv.append(school, year, description);
    
}