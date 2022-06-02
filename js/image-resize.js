let reviewImg1 = document.getElementById("review-1");
let reviewImg2 = document.getElementById("review-2");
let reviewImg3 = document.getElementById("review-3");
let reviewImg4 = document.getElementById("review-4");
let reviewImg5 = document.getElementById("review-5");
let reviewImg6 = document.getElementById("review-6");
let reviewImg7 = document.getElementById("review-7");
let reviewImg8 = document.getElementById("review-8");
let reviewImg9 = document.getElementById("review-9");

let count = 0;

/* Sean-review */
reviewImg1.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg1.style.width = "50%";
    reviewImg1.style.height = "600px";

    reviewImg2.style.display = "none";
    reviewImg3.style.display = "none";
  } else {
    reviewImg1.style.width = "24%";
    reviewImg1.style.height = "350px";

    reviewImg2.style.display = "block";
    reviewImg3.style.display = "block";
  }
});

reviewImg2.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg2.style.width = "50%";
    reviewImg2.style.height = "600px";

    reviewImg1.style.display = "none";
    reviewImg3.style.display = "none";
  } else {
    reviewImg2.style.width = "24%";
    reviewImg2.style.height = "350px";

    reviewImg1.style.display = "block";
    reviewImg3.style.display = "block";
  }
});

reviewImg3.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg3.style.width = "50%";
    reviewImg3.style.height = "600px";

    reviewImg2.style.display = "none";
    reviewImg1.style.display = "none";
  } else {
    reviewImg3.style.width = "24%";
    reviewImg3.style.height = "350px";

    reviewImg2.style.display = "block";
    reviewImg1.style.display = "block";
  }
});

/* jose-review */
reviewImg4.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg4.style.width = "50%";
    reviewImg4.style.height = "600px";

    reviewImg5.style.display = "none";
    reviewImg6.style.display = "none";
  } else {
    reviewImg4.style.width = "24%";
    reviewImg4.style.height = "350px";

    reviewImg5.style.display = "block";
    reviewImg6.style.display = "block";
  }
});

reviewImg5.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg5.style.width = "50%";
    reviewImg5.style.height = "600px";

    reviewImg4.style.display = "none";
    reviewImg6.style.display = "none";
  } else {
    reviewImg5.style.width = "24%";
    reviewImg5.style.height = "350px";

    reviewImg4.style.display = "block";
    reviewImg6.style.display = "block";
  }
});

reviewImg6.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg6.style.width = "50%";
    reviewImg6.style.height = "600px";

    reviewImg5.style.display = "none";
    reviewImg4.style.display = "none";
  } else {
    reviewImg6.style.width = "24%";
    reviewImg6.style.height = "350px";

    reviewImg5.style.display = "block";
    reviewImg4.style.display = "block";
  }
});

/* Sean-review */
reviewImg7.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg7.style.width = "50%";
    reviewImg7.style.height = "600px";

    reviewImg8.style.display = "none";
    reviewImg9.style.display = "none";
  } else {
    reviewImg7.style.width = "24%";
    reviewImg7.style.height = "350px";

    reviewImg8.style.display = "block";
    reviewImg9.style.display = "block";
  }
});

reviewImg8.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg8.style.width = "50%";
    reviewImg8.style.height = "600px";

    reviewImg7.style.display = "none";
    reviewImg9.style.display = "none";
  } else {
    reviewImg8.style.width = "24%";
    reviewImg8.style.height = "350px";

    reviewImg7.style.display = "block";
    reviewImg9.style.display = "block";
  }
});

reviewImg9.addEventListener("click", function () {
  count += 1;
  if (count % 2 != 0) {
    reviewImg9.style.width = "50%";
    reviewImg9.style.height = "600px";

    reviewImg8.style.display = "none";
    reviewImg7.style.display = "none";
  } else {
    reviewImg9.style.width = "24%";
    reviewImg9.style.height = "350px";

    reviewImg8.style.display = "block";
    reviewImg7.style.display = "block";
  }
});
