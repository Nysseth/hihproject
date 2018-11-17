var localInput = document.querySelector("#local--input");
var sessionInput = document.querySelector("#session--input");

var localSubmit = document.querySelector("#local");
var sessionSubmit = document.querySelector("#session");

var localOutcome = document.querySelector(".local--outcome");
var sessionOutcome = document.querySelector(".session--outcome");

var localClear = document.querySelector("#local--clear");
var sessionClear = document.querySelector("#session--clear");

localSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("opinion", JSON.stringify(localInput.value));
    localStoragePrint();
});

localClear.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.clear();
    localOutcome.innerHTML = "";
});

function localStoragePrint() {
    if(localStorage.opinion)
    {
        localOutcome.innerHTML = "Lubisz popping w stopniu: " + localStorage.opinion;
    }
}


sessionSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    sessionStorage.setItem("opinion", JSON.stringify(sessionInput.value));
    sessionStoragePrint();
});

sessionClear.addEventListener("click", function(e) {
    e.preventDefault();
    sessionStorage.clear();
    sessionOutcome.innerHTML = "";
});

function sessionStoragePrint() {
    if(sessionStorage.opinion)
    {
        sessionOutcome.innerHTML = "Lubisz popping w stopniu: " + sessionStorage.opinion;
    }
}

localStoragePrint();
sessionStoragePrint();