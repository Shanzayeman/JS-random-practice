document.getElementById("demo1").innerHTML = Math.random();
document.getElementById("demo2").innerHTML =
Math.floor(Math.random() * 10);
document.getElementById("demo3").innerHTML =
Math.floor(Math.random() * 100);
document.getElementById("demo4").innerHTML =
Math.floor(Math.random() * 10) + 1;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }