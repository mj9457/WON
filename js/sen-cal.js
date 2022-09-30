const nxt10 = document.getElementById("cal-next-btn-10");

const pre11 = document.getElementById("cal-pre-btn-11");
const nxt11 = document.getElementById("cal-next-btn-11");

const pre12 = document.getElementById("cal-pre-btn-12");

const senTabe10 = document.getElementById("sen-test-time-table-10");
const senTabe11 = document.getElementById("sen-test-time-table-11");
const senTabe12 = document.getElementById("sen-test-time-table-12");

nxt10.addEventListener("click", function() {
    senTabe10.style.display = "none";
    senTabe11.style.display = "table";
})

nxt11.addEventListener("click", function() {
    senTabe11.style.display = "none";
    senTabe12.style.display = "table";
})

pre11.addEventListener("click", function() {
    senTabe11.style.display = "none";
    senTabe10.style.display = "table";
})

pre12.addEventListener("click", function() {
    senTabe12.style.display = "none";
    senTabe11.style.display = "table";
})
