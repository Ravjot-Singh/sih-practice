document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".dashboard").style.left = "90%";
})

document.querySelector(".exit").addEventListener("click", () => {
    document.querySelector(".dashboard").style.left = "130%";
})

document.querySelector(".res-ham").addEventListener("click", () => {
    document.querySelector(".resources").style.left = "0";
})

document.querySelector(".res-cross").addEventListener("click", () => {
    document.querySelector(".resources").style.left = "-100%";
})