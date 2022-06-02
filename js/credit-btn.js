var listBtn16 = document.getElementById("credit-list-btn-16");
var listBtn17 = document.getElementById("credit-list-btn-17");
var listBtn18 = document.getElementById("credit-list-btn-18");
var listBtn19 = document.getElementById("credit-list-btn-19");
var listBtn20 = document.getElementById("credit-list-btn-20");
var listBtn21 = document.getElementById("credit-list-btn-21");
var listBtn22 = document.getElementById("credit-list-btn-22");
var listBtn23 = document.getElementById("credit-list-btn-23");

var table16 = document.getElementById("c-l-t-16");
var table17 = document.getElementById("c-l-t-17");
var table18 = document.getElementById("c-l-t-18");
var table19 = document.getElementById("c-l-t-19");
var table20 = document.getElementById("c-l-t-20");
var table21 = document.getElementById("c-l-t-21");
var table22 = document.getElementById("c-l-t-22");

var input16 = document.getElementById("table-input-16");
var input17 = document.getElementById("table-input-17");
var input18 = document.getElementById("table-input-18");
var input19 = document.getElementById("table-input-19");
var input20 = document.getElementById("table-input-20");
var input21 = document.getElementById("table-input-21");
var input22 = document.getElementById("table-input-22");
var input23 = document.getElementById("table-input-23");

var count16 = 0;
var count17 = 0;
var count18 = 0;
var count19 = 0;
var count20 = 0;
var count21 = 0;
var count22 = 0;
var count23 = 0;

listBtn16.addEventListener("click", function () {
  count16++;
  count17 = 0;
  count18 = 0;
  count19 = 0;
  count20 = 0;
  count21 = 0;
  count22 = 0;

  if (count16 % 2 != 0) {
    table16.style.display = "table";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "none";

    input16.style.display = "block";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "none";
    input23.style.display = "none";

    listBtn16.style.color = "white";
    listBtn16.style.background = "rgb(0, 52, 102)";

    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    table16.style.display = "none";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
  }
});

listBtn17.addEventListener("click", function () {
  count17++;
  count16 = 0;
  count18 = 0;
  count19 = 0;
  count20 = 0;
  count21 = 0;
  count22 = 0;

  if (count17 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "table";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "none";

    input16.style.display = "none";
    input17.style.display = "block";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "none";
    input23.style.display = "none";

    listBtn17.style.color = "white";
    listBtn17.style.background = "rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    table17.style.display = "none";
  }
});

listBtn18.addEventListener("click", function () {
  count18++;
  count16 = 0;
  count17 = 0;
  count19 = 0;
  count20 = 0;
  count21 = 0;
  count22 = 0;

  if (count18 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "table";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "none";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "block";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "none";
    input23.style.display = "none";

    listBtn18.style.color = "white";
    listBtn18.style.background = "rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    table18.style.display = "none";
  }
});

listBtn19.addEventListener("click", function () {
  count19++;
  count16 = 0;
  count17 = 0;
  count18 = 0;
  count20 = 0;
  count21 = 0;
  count22 = 0;

  if (count19 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "table";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "none";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "block";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "none";
    input23.style.display = "none";

    listBtn19.style.color = "white";
    listBtn19.style.background = "rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    table19.style.display = "none";
  }
});

listBtn20.addEventListener("click", function () {
  count20++;
  count16 = 0;
  count17 = 0;
  count18 = 0;
  count19 = 0;
  count21 = 0;
  count22 = 0;

  if (count20 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "table";
    table21.style.display = "none";
    table22.style.display = "none";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "block";
    input21.style.display = "none";
    input22.style.display = "none";
    input23.style.display = "none";

    listBtn20.style.color = "white";
    listBtn20.style.background = "rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    table20.style.display = "none";
  }
});

listBtn21.addEventListener("click", function () {
  count21++;
  count16 = 0;
  count17 = 0;
  count18 = 0;
  count19 = 0;
  count20 = 0;
  count22 = 0;

  if (count21 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "table";
    table22.style.display = "none";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "block";
    input22.style.display = "none";
    input23.style.display = "none";

    listBtn21.style.color = "white";
    listBtn21.style.background = "rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    table21.style.display = "none";
  }
});

listBtn22.addEventListener("click", function () {
  count22++;
  count16 = 0;
  count17 = 0;
  count18 = 0;
  count19 = 0;
  count20 = 0;
  count21 = 0;

  if (count22 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "table";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "block";
    input23.style.display = "none";

    listBtn22.style.color = "white";
    listBtn22.style.background = "rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
  } else {
    table22.style.display = "none";
  }
});

listBtn23.addEventListener("click", function () {
  count23++;
  count16 = 0;
  count17 = 0;
  count18 = 0;
  count19 = 0;
  count20 = 0;
  count21 = 0;
  count22 = 0;

  if (count23 % 2 != 0) {
    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "none";
    // table23.style.display = "table";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "none";
    // input23.style.display = "block";

    // listBtn23.style.color ="white";
    // listBtn23.style.background ="rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  } else {
    // table23.style.display = 'none';

    table16.style.display = "none";
    table17.style.display = "none";
    table18.style.display = "none";
    table19.style.display = "none";
    table20.style.display = "none";
    table21.style.display = "none";
    table22.style.display = "none";
    // table23.style.display = "table";

    input16.style.display = "none";
    input17.style.display = "none";
    input18.style.display = "none";
    input19.style.display = "none";
    input20.style.display = "none";
    input21.style.display = "none";
    input22.style.display = "none";

    // listBtn23.style.color ="white";
    // listBtn23.style.background ="rgb(0, 52, 102)";

    listBtn16.style.color = "black";
    listBtn16.style.background = "none";
    listBtn17.style.color = "black";
    listBtn17.style.background = "none";
    listBtn18.style.color = "black";
    listBtn18.style.background = "none";
    listBtn19.style.color = "black";
    listBtn19.style.background = "none";
    listBtn20.style.color = "black";
    listBtn20.style.background = "none";
    listBtn21.style.color = "black";
    listBtn21.style.background = "none";
    listBtn22.style.color = "black";
    listBtn22.style.background = "none";
  }
});
