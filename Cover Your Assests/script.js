// Here I have created variables for each one of my buttons
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
    counter.innerHTML = count
});



// function increment() {
//     let counter = document.querySelector(".counter");
//     let count = counter + 50000;

//     count;
//     counter.innerHTML = count;
    
// }

// function decrement() {
//     let counter = document.querySelector(".counter");
//     let count = 0;

//     count--
//     counter.innerHTML = count;
// }


// function goldCounter() {
//     let goldNum = 0;

//     let newNum = goldNum + 50000;

//     return newNum
// }

