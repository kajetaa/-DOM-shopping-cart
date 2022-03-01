// alert("hello");

var likeButton = document.getElementsByClassName("likeButton");
var removeBtn = document.getElementsByClassName("removeBtn");
var itemDiv = document.getElementsByClassName("item-div");
var mainRow = document.getElementsByClassName("mainRow");
var total = document.getElementsByClassName("total");
var qnty = document.getElementsByClassName("qnty");

var add = document.getElementsByClassName("add");
var sub = document.getElementsByClassName("sub");

for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", function () {
    likeButton[i].classList.toggle("light-on");
  });
}

for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", function () {
    mainRow[i].classList.add("item-div");
  });
}

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    qnty[i].innerHTML++;
    // total[i].innerHTML = parseInt(qnty[i].innerHTML);
  });
}

// var tt =

for (let i = 0; i < add.length; i++) {
  sub[i].addEventListener("click", function () {
    let sum = parseInt(qnty[i].innerHTML);
    if (qnty[i].innerHTML == 0) {
      mainRow[i].classList.add("item-div");
      // qnty[i].innerHTML--;
      // total[i].innerHTML = sum;
    } else {
      // let sum = -parseInt(qnty[i].innerHTML);
      qnty[i].innerHTML--;
      total[i].innerHTML = sum;
      // total[i].innerHTML--;
    }
  });
}
// for (let i = 0; i < total.length; i++) {
//   total[i].innerHTML == qnty[i].innerHTML + qnty[i].innerHTML;
// }
