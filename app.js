'use strict';

let circle = document.querySelector('.circle');
let upBtn = document.querySelector('.upBtn');
let downBtn = document.querySelector('.downBtn');

let rotateValue = circle.style.transform;
let rotatesum;

upBtn.addEventListener('click', function () {
  rotatesum = rotateValue + 'rotate(-90deg)';
  circle.style.transform = rotatesum;
  rotateValue = rotatesum;
});

downBtn.addEventListener('click', function () {
  rotatesum = rotateValue + 'rotate(90deg)';
  circle.style.transform = rotatesum;
  rotateValue = rotatesum;
});
