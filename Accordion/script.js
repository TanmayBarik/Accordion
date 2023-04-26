var accordion = document.querySelectorAll(".content-container-div");

for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");

    })
};