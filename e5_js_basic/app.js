// 菜单
const menu = [
    '🍞', '🥯', '🥞', '🥩', '🍗', 
    '🍖', '🌭', '🍔', '🍟', '🍕', 
    '🥪', '🌮', '🥗', '🥘', '🍜', 
    '🍛', '🍣', '🥟', '🍘', '🍤'
];

// H1
// 用来显示随机结果
const 吃这个 = document.getElementById("eatthis");

// 按钮点击，触发makeChoice这个函数
document.getElementById("eatwhat").addEventListener(
    "click", makeChoice
);

// 随机从菜单里选出一个元素并且显示到页面上
function makeChoice() {
    吃这个.textContent = menu[getRandomInt(menu.length)];
}

// 生成随机数，MDN文档:
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}