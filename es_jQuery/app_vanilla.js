  const menu = [
    '🍞', '🥯', '🥞', '🥩', '🍗', 
    '🍖', '🌭', '🍔', '🍟', '🍕', 
    '🥪', '🌮', '🥗', '🥘', '🍜', 
    '🍛', '🍣', '🥟', '🍘', '🍤'
];

const 吃这个 = document.getElementById("eatthis");

document.getElementById("eatwhat").addEventListener(
    "click", makeChoice
);

function makeChoice() {
    吃这个.textContent = menu[getRandomInt(menu.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
