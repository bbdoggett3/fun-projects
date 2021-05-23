//Here I have created variables for each one of my buttons
let decreaseBtn = document.querySelector(".btn-decrease");
let increaseBtn = document.querySelector(".btn-increase");
let counter = document.querySelector(".counter");
let count = 0;

decreaseBtn.addEventListener('click', ()=> {
    count--
    counter.innerHTML = count;
});

increaseBtn.addEventListener('click', ()=> {
    count++;
    counter.innerHTML = count++
});
