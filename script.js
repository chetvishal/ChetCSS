// MODAL SCRIPT
const triggerModal = document.getElementsByClassName("modal-trigger-btn")[0];
const modal = document.getElementsByClassName("modal-body")[0];
const shutModal = document.getElementsByClassName("shut-modal")[0];

triggerModal.addEventListener("click", () => {
    modal.style.display = "block";
    console.log("your triggering");
});

shutModal.addEventListener("click", () => {
    modal.style.display = "none";
    console.log("your shuutting down");
});

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
