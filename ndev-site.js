// ░█▄─░█ ░█▀▀▄ ░█▀▀▀ ░█──░█ 　 ░█▀▀▀█ ▀█▀ ▀▀█▀▀ ░█▀▀▀ 　 ───░█ ░█▀▀▀█ 
// ░█░█░█ ░█─░█ ░█▀▀▀ ─░█░█─ 　 ─▀▀▀▄▄ ░█─ ─░█── ░█▀▀▀ 　 ─▄─░█ ─▀▀▀▄▄ 
// ░█──▀█ ░█▄▄▀ ░█▄▄▄ ──▀▄▀─ 　 ░█▄▄▄█ ▄█▄ ─░█── ░█▄▄▄ 　 ░█▄▄█ ░█▄▄▄█

// Site-specific JavaScript for their respective individual needs

// ! Requires ndev-global.js to function correctly ! (https://nouhi.dev/assets/global-scripts/ndev-global.js)

document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};

function myd_btn() {
    location.href = "https://nouhidev.itch.io/my-eyes-deceive";
}