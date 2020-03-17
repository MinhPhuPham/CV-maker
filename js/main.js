'use strict';

// function to display section
function editar(idContent) {
    $(document).ready(function() {
        $('#' + idContent).slideToggle("fast");
    });
}

// function to close section
function cerrar(idContent) {
    document.getElementById(idContent).style.display = 'none';
}
// function to display preview
function vistaPrevia(idContent) {
    document.getElementById(idContent).style.display = 'block';
}
// Fill in the form Data Profile

var dataName2 = document.querySelector("#name");
var dataLastName2 = document.querySelector("#lastname");
var dataprofession2 = document.querySelector("#profession");

function fillProfile() {
    vistaPrevia("preview");
    var dataName = dataName2.value;
    var dataLastName = dataLastName2.value;
    var dataprofession = dataprofession2.value;

    // Reset text area
    dataName2.value = "";
    dataLastName2.value = "";
    dataprofession2.value = "";

    dataName = dataName.toUpperCase();
    dataLastName = dataLastName.toUpperCase();

    // saved to localStorage
    localStorage.setItem('name', dataName);
    localStorage.setItem('lastname', dataLastName);
    localStorage.setItem('profession', dataprofession);

    // fill to localStorage
    document.querySelector("#data-profile").innerHTML = (dataName ? dataName : '') + ' ' + (dataLastName ? dataLastName : '');
    document.querySelector("#data-profession").innerHTML = dataprofession;

}
var dataName3 = localStorage.getItem('name');
var dataLastName3 = localStorage.getItem('lastname');
document.getElementById("data-profile").innerHTML = (dataName3 ? dataName3 : ' ') + ' ' + (dataLastName3 ? dataLastName3 : ' ');
document.getElementById("data-profession").innerHTML = localStorage.getItem('profession');


//clear data
function deleteProfile() {
    document.querySelector("#data-profile").innerHTML = '';
    document.querySelector("#data-profession").innerHTML = '';
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('profession');
}

var profileDelete = document.querySelector('.delete-profile');
profileDelete.addEventListener('click', deleteProfile);

var saveProfile = document.querySelector('.saveProfile');
saveProfile.addEventListener('click', fillProfile);

// Extract data form
var dataAbstract2 = document.querySelector("#summary")

function fillSummary() {
    var dataAbstract = dataAbstract2.value;
    vistaPrevia("preview");

    localStorage.setItem('abstract', dataAbstract);

    document.querySelector("#data-summary").innerHTML = dataAbstract;
}
document.querySelector("#data-summary").innerHTML = localStorage.getItem('abstract');
var saveSumary = document.querySelector('.saveSumary');
saveSumary.addEventListener('click', fillSummary);

function deleteSummary() {
    document.querySelector("#data-summary").innerHTML = '';
    localStorage.removeItem('abstract');
}

var summaryDelete = document.querySelector('.delete-summary');
summaryDelete.addEventListener('click', deleteSummary);

// functions validate email
function validateEmail(email) {
    var regex = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,20}\b/gi;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    if (validateEmail(email) === false) {
        document.querySelector(".error_email").innerHTML = "Enter a valid email";
    } else {
        document.querySelector(".error_email").innerHTML = " ";
    }
}

function checknumberskill() {

}
// functions validate Telephone
function validatePhone(telephone) {
    var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/g;
    if (regexPhone.test(telephone)) {
        return true;
    } else {
        return false;
    }
}

function checkTelephone() {
    var telephone = document.getElementById("telephone").value;
    if (validatePhone(telephone) === false) {
        document.querySelector(".error_telephone").innerHTML = "Please enter a valid phone number - 10 number";
    } else {
        document.querySelector(".error_telephone").innerHTML = " ";
    }
}

// contact data form
var dataPhoneNumber2 = document.querySelector("#telephone")
var dataEmail2 = document.querySelector("#email");

function fillContact() {
    checkEmail();
    checkTelephone();
    var dataPhoneNumber = dataPhoneNumber2.value;
    var dataEmail = dataEmail2.value;
    vistaPrevia("preview");

    localStorage.setItem('phonenumber', dataPhoneNumber);
    localStorage.setItem('email', dataEmail);

    document.querySelector("#data-telephone").innerHTML = dataPhoneNumber;
    document.querySelector("#data-email").innerHTML = dataEmail;
}
document.querySelector("#data-telephone").innerHTML = localStorage.getItem('phonenumber');
document.querySelector("#data-email").innerHTML = localStorage.getItem('email');

var saveContact = document.querySelector('.saveContact');
saveContact.addEventListener('click', fillContact);

function deleteContact() {
    document.querySelector("#data-telephone").innerHTML = '';
    document.querySelector("#data-email").innerHTML = '';

}

var contactDelete = document.querySelector('.delete-contact');
contactDelete.addEventListener('click', deleteContact);

// LABOR EXPERIENCE SECTION ///////////////////////////////////////////// /////////
var jobTitle = document.querySelector("#position");
var jobExperience = document.querySelector('#experience');
var startMonth = document.querySelector('.month');
var startYear = document.querySelector('.year');
var endMonth = document.querySelector('#month-end');
var endYear = document.querySelector('#year-end');
var currentCheck = document.querySelector('#actuality');
var jobList = [];
var jobListPreview = document.querySelector(".span-experience");


function addJob() {
    var job = {
        cargo: jobTitle.value,
        empresa: jobExperience.value,
        mesIni: startMonth.value,
        anoIni: startYear.value,
        actual: currentCheck.checked,
        mesFin: endMonth.value,
        anoFin: endYear.value
    };
    jobList.push(job);
    var allJobList = '';

    for (var i = 0; i < jobList.length; i++) {
        allJobList += '<li>Position: ' + jobList[i].cargo + '</li>';
        allJobList += '<li>Business: ' + jobList[i].empresa + '</li>';
        allJobList += '<li>Start date: ' + jobList[i].mesIni + ' - ' + jobList[i].anoIni + '</li>';
        allJobList += '<li>Ending date: ';
        if (jobList[i].actual) {
            allJobList += 'currently';
        } else {
            allJobList += jobList[i].mesFin + ' - ' + jobList[i].anoFin + '</li>';
        }
        allJobList += '<hr class="line"><br>'
    }
    jobListPreview.innerHTML = allJobList;
    document.querySelector("#position").value = '';
    document.querySelector('#experience').value = '';
    document.querySelector('.initial').value = '';
    document.querySelector('.end').value = '';
    vistaPrevia("preview");
}



var botonPruebaEx = document.querySelector('.prueba_experience');
botonPruebaEx.addEventListener('click', addJob);

function deleteJob() {
    jobList = [];
    jobListPreview.innerHTML = '';
}

var jobDelete = document.querySelector('.delete-experience');
jobDelete.addEventListener('click', deleteJob);


// EDUCATION SECTION //////////////////////////////////////////////// ////////
var studyName = document.querySelector(".education");
var studyInstitution = document.querySelector('.education_university');
var studyList = [];
var studyListPreview = document.querySelector(".data-studies");

function addStudy() {
    var study = {
        name: studyName.value,
        insti: studyInstitution.value
    };
    if (study.name != '' && study.insti != '') {
        studyList.push(study);
        previewStudy();
        document.querySelector(".education").value = '';
        document.querySelector('.education_university').value = '';
        vistaPrevia("preview");
    }

}

function previewStudy() {
    var allStudyList = '';

    for (var i = 0; i < studyList.length; i++) {
        allStudyList += '<li>' + studyList[i].name + '</li>';
        allStudyList += '<li>' + studyList[i].insti + '</li><hr class="line">';
    }
    studyListPreview.innerHTML = allStudyList;
}



function deleteStudies() {
    studyList = [];
    studyListPreview.innerHTML = '';
}


var botonPrueba = document.querySelector('.prueba');
botonPrueba.addEventListener('click', addStudy);

// LANGUAGE SECTION //////////////////////////////////////////////// ////////


var languageName = document.querySelector(".languages");
var languageLevel = document.querySelector("#level");
var languageList = [];
var languageListPreview = document.querySelector(".data-languages");

function addLanguage() {
    var language = {
        name: languageName.value,
        lvl: languageLevel.value
    };
    languageList.push(language);
    var allLanguageList = '';

    for (var i = 0; i < languageList.length; i++) {
        allLanguageList += '<li>' + languageList[i].name + '</li>';
        allLanguageList += '<li>' + languageList[i].lvl + '</li><hr class="line">';

    }
    languageListPreview.innerHTML = allLanguageList;
    document.querySelector(".languages").value = '';
    document.querySelector('.level').value = '';
    vistaPrevia("preview");
}
var botonIdioma = document.querySelector('.prueba_language');
botonIdioma.addEventListener('click', addLanguage);

function deleteLanguage() {
    languageList = [];
    languageListPreview.innerHTML = '';
}

//SECCION INTERESES/////
var interestName = document.querySelector("#interest");
var interestList = [];
var interestListPreview = document.querySelector(".data-interest");

function addInterest() {
    var interest = {
        interes: interestName.value
    };
    interestList.push(interest);
    var allInterestList = '';

    for (var i = 0; i < interestList.length; i++) {
        allInterestList += '<li>' + interestList[i].interes + '</li>';

    }
    interestListPreview.innerHTML = allInterestList;
    document.querySelector("#interest").value = '';
    vistaPrevia("preview");
}
var botonInteres = document.querySelector('.prueba_interest');
botonInteres.addEventListener('click', addInterest);

function deleteInterest() {
    interestList = [];
    interestListPreview.innerHTML = '';
}

function fillMore() {
    vistaPrevia("preview");
    let Array = [];

    var datosHabilidades1 = document.querySelector("#skills1").value;
    var datosHabilidades2 = document.querySelector("#skills2").value;
    var datosHabilidades3 = document.querySelector("#skills3").value;

    var newSkill = document.querySelectorAll('.skillName');
    var inputSkill = document.querySelectorAll('.skills');
    var inputLevel = document.querySelectorAll('.level_skills');


    for (var i = 0; i < newSkill.length; i++) {
        if (inputLevel[i].value >= 0 && inputLevel[i].value <= 100) {
            newSkill[i].innerHTML = inputSkill[i].value;
            newSkill[i].parentElement.style.width = inputLevel[i].value + '%';
        } else {
            alert('You must choose a level between 0 and 100');
        }

    }
    document.querySelector("#skillName1").innerHTML = datosHabilidades1;
    document.querySelector("#skillName2").innerHTML = datosHabilidades2;
    document.querySelector("#skillName3").innerHTML = datosHabilidades3;
}
var saveMore = document.querySelector('.saveMore');
saveMore.addEventListener('click', fillMore);

function deleteSkills() {
    var previewSkillNames = document.querySelectorAll('.skillName');
    var previewSkillLevels = document.querySelectorAll('.levelSkill');

    var inputSkillNames = document.querySelectorAll('.skills');
    var inputSkillLevels = document.querySelectorAll('.level_skills');

    for (var i = 0; i < previewSkillNames.length; i++) {
        previewSkillNames[i].innerHTML = '';
        previewSkillNames[i].parentElement.style.width = 0;
    }

    for (var i = 0; i < inputSkillNames.length; i++) {
        inputSkillNames[i].value = '';
        inputSkillLevels[i].value = '';
    }


    //inputLevel.style.width = '';
}

function deleteAdditional() {
    deleteInterest();
    deleteLanguage();
    deleteStudies();
    deleteSkills();
}
var additionalDelete = document.querySelector('.delete-additional');
additionalDelete.addEventListener('click', deleteAdditional);
// function for start period and end period
var monthOptions = '<option value="January">January</option>';
monthOptions = monthOptions + '<option value="February"> February</option>';
monthOptions = monthOptions + '<option value="March">March</option>';
monthOptions = monthOptions + '<option value="April">April</option>';
monthOptions = monthOptions + '<option value="May">May</option>';
monthOptions = monthOptions + '<option value="June">June</option>';
monthOptions = monthOptions + '<option value="July">July</option>';
monthOptions = monthOptions + '<option value="August">August</option>';
monthOptions = monthOptions + '<option value="September">September</option>';
monthOptions = monthOptions + '<option value="October">October</option>';
monthOptions = monthOptions + '<option value="November">November</option>';
monthOptions = monthOptions + '<option value="December">December</option>';

var months = document.querySelectorAll('.month');
for (var i = 0; i < months.length; i++) {
    months[i].innerHTML = monthOptions;
}

var years = 2052;
var yearOptions = ''; // store html options that go in the select

for (var initialYear = 1950; initialYear < years; initialYear++) {
    yearOptions = yearOptions + '<option>' + (initialYear) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
    yearsAll[i].innerHTML = yearOptions;
}
// function for language level
var options = '<option value ="A1">A1</option>';
var options = options + '<option value ="A2">A2</option>';
var options = options + '<option value ="B1">B1</option>';
var options = options + '<option value ="B2">B2</option>';
var options = options + '<option value ="C1">C1</option>';
var options = options + '<option value ="C2">C2</option>';
document.querySelector('#level').innerHTML = options;


//smooth scroll function
(function() {
    if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
        var smoothScroll = function(anchor, duration) {
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance / (duration / 16);
            var stopAnimation;
            var animateScroll = function() {
                window.scrollBy(0, increments);
                stopAnimation();
            };
            if (increments >= 0) {
                stopAnimation = function() {
                    var travelled = window.pageYOffset;
                    if ((travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight)) {
                        clearInterval(runAnimation);
                    }
                };
            } else {
                stopAnimation = function() {
                    var travelled = window.pageYOffset;
                    if (travelled <= (endLocation || 0)) {
                        clearInterval(runAnimation);
                    }
                };
            }
            var runAnimation = setInterval(animateScroll, 16);
        };
        var scrollToggle = document.querySelectorAll('.scroll');
        [].forEach.call(scrollToggle, function(toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');
                if (dataTarget) {
                    smoothScroll(dataTarget, dataSpeed || 1000);
                }
            }, false);
        });
    }

})();

var themes = document.querySelectorAll('.botoncito');
var showPreview = document.querySelector('.showpreview');


function applyTheme(event) {
    var themeSelected = event.currentTarget.getAttribute('data-theme-class');
    showPreview.classList.remove('theme1', 'theme2', 'theme3', 'theme4');
    showPreview.classList.add(themeSelected);

}

for (var i = 0; i < themes.length; i++) {
    themes[i].addEventListener('click', applyTheme);
}

// /*imprimir*/
function printCurriculum() {

    var printer = document.getElementById('preview2');
    printer.style.display = "block";


    var content = printer.innerHTML;
    var viewPrint = document.body.innerHTML;

    document.body.innerHTML = content;
    window.print();
    document.body.innerHTML = viewPrint;
}
var fileInput = document.querySelector('input[type=file]');
var filenameContainer = document.querySelector('#filename');
var dropzone = document.querySelector('div');

fileInput.addEventListener('change', function() {
    filenameContainer.innerText = fileInput.value.split('\\').pop();
});

var img = document.querySelector('#myImg'); // $('img')[0]
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            localStorage.setItem('img', URL.createObjectURL(this.files[0]))
        }
    });
});