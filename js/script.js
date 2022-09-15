function loadEvent() {
   const newCatButton = document.querySelector(".add-cat");
   newCatButton.addEventListener("click", function () {
    const catContainer = document.querySelector(".cats");
    const newCat = `<img src="https://cataas.com/cat" alt="">`;
    catContainer.insertAdjacentHTML("beforeend",newCat);
   })
}

window.addEventListener("load", loadEvent);
