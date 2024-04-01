document.querySelector(".player-chunk-prev").addEventListener("click", () => {
    moveClass("timeline-chunk-active", "previousElementSibling");
    moveClass("player-chunk-active", "previousElementSibling");
});

document.querySelector(".player-chunk-next").addEventListener("click", () => {
    moveClass("timeline-chunk-active", "nextElementSibling");
    moveClass("player-chunk-active", "nextElementSibling");
});

function moveClass(className, method) {
    let activeChunk = document.querySelector(`.${className}`);
    let elem = activeChunk[method];

    if (!elem) return;

    activeChunk.classList.remove(className);
    elem.classList.add(className);
}
