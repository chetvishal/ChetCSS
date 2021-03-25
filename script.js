// float button 

const actionBtn = document.querySelector('.action');
actionBtn.addEventListener('click', actionToggle);

function actionToggle(){
    var action = document.querySelector('.action');
    action.classList.toggle('active');
}


// MODAL SCRIPT
const modal = document.getElementsByClassName("modal-body")[0];

function showModal(){
    modal.style.display = "block";
}

function shutModal(){
    modal.style.display = "none";
}

// RATING
const ratingStar = document.getElementsByClassName('rating-star');

for (let i = 0; i < ratingStar.length; i++) {
    ratingStar[i].addEventListener("mouseenter", () => {
        for (let x = 0; x <= i; x++) {
            ratingStar[x].style.color = "var(--warning)";
        }
    })
}

for (let i = 0; i < ratingStar.length; i++) {
    ratingStar[i].addEventListener("mouseleave", () => {
        for (let x = 0; x <= i; x++) {
            ratingStar[x].style.color = "var(--primary)";
        }
    })
}



