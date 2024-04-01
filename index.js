document.querySelector(".player-chunk-prev").addEventListener("click", () => {
    moveClass("timeline-chunk-active", "previousElementSibling", (elem) => {
        const elemInner = elem.querySelector(".timeline-chunk-inner");
        const widthInner = parseFloat(elemInner.style.width) || 0;
        elemInner.style.width = "";

        return widthInner <= 20;
    });

    moveClass("player-chunk-active", "previousElementSibling");
});

document.querySelector(".player-chunk-next").addEventListener("click", next);

function moveClass(className, method, pred) {
    const activeChunk = document.querySelector(`.${className}`);
    const elem = activeChunk[method];

    if (pred && !pred(activeChunk)) return null;

    if (!elem) return null;

    activeChunk.classList.remove(className);
    elem.classList.add(className);
    return activeChunk;
}

function next() {
    const el = moveClass("timeline-chunk-active", "nextElementSibling");
    moveClass("player-chunk-active", "nextElementSibling");

    if (el) {
        const elChild = el.querySelector(".timeline-chunk-inner");
        elChild.style.width = "";
    }
}

let timer;

function runInterval(time, step) {
    clearInterval(timer);
    const interval = (time * 1000 * step) / 100;

    timer = setInterval(() => {
        const activeInner = document.querySelector(`.timeline-chunk-active`).querySelector(".timeline-chunk-inner");

        const widthInner = parseFloat(activeInner.style.width) || 0;

        if (widthInner === 100) {
            next();
            return;
        }
        activeInner.style.width = `${widthInner + step}%`;
    }, interval);
}

runInterval(5, 1);
