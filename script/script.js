let result = document.querySelector('#selected');
let rating = document.getElementById('rating');
rating.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "BUTTON"){ 
        result.innerText = "You selected " + `${element.id}` + " out of 5";
    }
});

function submit() {
    thankYouState = document.getElementById("thank-you-state");
    opinion = document.getElementById("opinion");
    thankYouState.style.display = "flex";
    opinion.style.display = "none"; 
};