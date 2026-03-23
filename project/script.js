/*search*/
const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
    let value = searchInput.value;
    if (value === "") {
        alert("Please enter something to search!");
    } else {
        alert("You searched for: " + value);
    }
});
const backToTop = document.querySelector(".foot-panel1");
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const cart = document.querySelector(".nav-cart");
cart.addEventListener("click", () => {
    alert("Your cart is empty 🛒");
});
const signIn = document.querySelector(".nav-signin");
signIn.addEventListener("click", () => {
    alert("Redirecting to Sign In page...");
});
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("click", () => {
        let title = box.querySelector("h2").innerText;
        alert("Opening: " + title);
    });
});
