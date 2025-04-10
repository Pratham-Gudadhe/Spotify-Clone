let cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("mouseenter",() => {
        let play_btn = card.querySelector(".play_music");
        play_btn.classList.remove("display_none");
    });
    card.addEventListener("mouseleave",() => {
        let play_btn = card.querySelector(".play_music");
        play_btn.classList.add("display_none");
    });
}