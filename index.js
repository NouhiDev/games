$(window).on("load",async function(){
    // await delay(2000);
    $(".loader").fadeOut(1000);
    delay(1000).then(() => $(".content").fadeIn(1000));
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function back_btn() {
    location.href = "https://nouhidev.github.io/projects";
}

function remnants_btn() {
    location.href = "https://nouhidev.github.io/remnants/";
}

function sb_btn() {
    location.href = "https://nouhidev.itch.io/shreks-basement";
}

function achromatopsia_btn() {
    location.href = "https://nouhidev.itch.io/achromatopsia";
}

function ets_btn() {
    location.href = "https://nouhidev.itch.io/escape-the-shrek";
}