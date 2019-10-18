"use strict";

//var mydiv = document.getElementById("search_place");
var submt = document.querySelector(".submits");
var serc = document.querySelector("#search_place");

serc.onclick = function (e) {
  var target = e.target;
  target.style.opacity = 1;
}; //var close = document.querySelector(".close_bag");


close.onclick = function (e) {
  if (e.target == 'DIV') {
    var item = document.querySelector(".item_bag");
    item.style.display = 'none';
  }
};

debugger;

function showhide(d) {
  d.style.opacity = 1;
}

var currentPos = 0;
var Width = 200;
var content = document.getElementById("content");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var contW = content.offsetWidth;
var n = Math.ceil(contW);
console.log(n);
var t = n / Width;
var temp = Math.ceil(t);
var r = temp * 1.6;
console.log(r);

var slide = function slide(event) {
  if (event.target.value == "prev") {
    if (currentPos === -r * Width || currentPos !== 0) {
      currentPos = currentPos + Width;
      console.log(currentPos + 'b');
    } else {
      currentPos = 0;
    }
  } else {
    if (currentPos === 0 || currentPos !== -r * Width) {
      currentPos = currentPos - Width;
      console.log(currentPos);
    } else {
      currentPos = currentPos;
    }
  }

  content.style.left = currentPos + "px";
};

prev.addEventListener("click", slide);
next.addEventListener("click", slide);
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var thumb = document.querySelectorAll('.im');
var div_array = Array.prototype.slice.call(thumb);

if (thumbBar !== null) {
  thumbBar.addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute('src');
    var imgId = e.target.getAttribute('id');
    displayImage(imgSrc);
    e.target.style.visibility = 'hidden';
    var newImg = div_array.filter(function (el, ind) {
      return ind !== imgId - 1;
    });

    for (var i = 0; i < newImg.length; i++) {
      newImg[i].style.visibility = 'visible';
    }

    return;
  });
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

var check = document.querySelector('.size_select');
var selectedLi;

if (check !== null) {
  check.onclick = function (e) {
    var target = e.target;

    while (target != this) {
      if (target.tagName == 'LI') {
        borderLight(target);
        return;
      }

      target = target.parentNode;
    }
  };
}

function borderLight(node) {
  if (selectedLi) {
    selectedLi.classList.remove('borderLight');
  }

  selectedLi = node;
  selectedLi.classList.add('borderLight');
}

var select;
var b = document.querySelector('#btn-sub');

if (b !== null) {
  b.addEventListener('click', function (e) {
    var target = e.target; //target.classList.remove('bef');

    changeValue(target);
    changeBg(target);
  });
}

function changeBg(node) {
  if (select) {
    select.classList.remove('changeV');
  }

  select = node;
  select.classList.add('changeV');
}

function changeValue(node) {
  if (select) {
    select.classList.remove('bef');
  }

  select = node;
  select.classList.add('bef');
}

function filterByLetter(a, b) {
  var letter = new RegExp(b);
  var match = letter.exec(a);
  console.log(a.match(b)); // return match;
}

filterByLetter("hello world", "a");