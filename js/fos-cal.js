/* 21 btn */
var cal21 = document.querySelector("#cal-wrap-21"); /* 21 학번 계산기 */

var btn21 = document.querySelector("#btn-21"); /* 21 학번 버튼 */

var inputF21 = document.querySelector("#fos-f-21"); /* F 영역 입력받은 값 */
var inputO21  = document.querySelector("#fos-o-21"); /* O 영역 입력받은 값 */
var inputS21  = document.querySelector("#fos-s-21"); /* S 영역 입력받은 값 */
var resultBtn21 = document.querySelector("#fos-result-btn-21"); /* 확인하기 버튼 */

var resultF21 = document.querySelector("#fos-f-val-21"); /* F 영역 결과 확인 */
var resultO21 = document.querySelector("#fos-o-val-21"); /* O 영역 결과 확인 */
var resultS21 = document.querySelector("#fos-s-val-21"); /* S 영역 결과 확인 */
var resultAllFOS21 = document.querySelector("#fos-all-val-21"); /* 유효 이수 시간 */

var resultOk21 = document.querySelector("#fos-result-val-ok-21"); /* 충족 글자 */
var resultNk21 = document.querySelector("#fos-result-val-nk-21"); /* 미충족 글자 */
var resultAll21 = document.querySelector("#fos-result-val-21"); /* 졸업 조건 */

var count21 = 0;

/* 22 btn */
var cal22 = document.querySelector("#cal-wrap-22"); /* 22 학번 계산기 */

var btn22 = document.querySelector("#btn-22"); /* 22 학번 버튼 */

var inputF22 = document.querySelector("#fos-f-22"); /* F 영역 입력받은 값 */
var inputO22  = document.querySelector("#fos-o-22"); /* O 영역 입력받은 값 */
var inputS22  = document.querySelector("#fos-s-22"); /* S 영역 입력받은 값 */
var resultBtn22 = document.querySelector("#fos-result-btn-22"); /* 확인하기 버튼 */

var resultF22 = document.querySelector("#fos-f-val-22"); /* F 영역 결과 확인 */
var resultO22 = document.querySelector("#fos-o-val-22"); /* O 영역 결과 확인 */
var resultS22 = document.querySelector("#fos-s-val-22"); /* S 영역 결과 확인 */
var resultAllFOS22 = document.querySelector("#fos-all-val-22"); /* 유효 이수 시간 */

var resultOk22 = document.querySelector("#fos-result-val-ok-22"); /* 충족 글자 */
var resultNk22 = document.querySelector("#fos-result-val-nk-22"); /* 미충족 글자 */
var resultAll22 = document.querySelector("#fos-result-val-22"); /* 졸업 조건 */

var count22 = 0;


/* 21 btn event */
btn21.addEventListener("click", function () {
    count21 ++;
    count22 = 0;
    cal22.style.display = "none";
    if ( count21 % 2 == 0 ) {        
        cal21.style.display = "none";
        btn21.style.backgroundColor = "white";
        btn21.style.color ="black";
    } else {
        cal21.style.display = "flex";
        btn21.style.backgroundColor = "rgb(0, 52, 102)";
        btn21.style.color ="white";
        btn22.style.backgroundColor = "white";
        btn22.style.color ="black";
    }
})

/* 22 btn event */
btn22.addEventListener("click", function () {
    count22 ++;
    count21 = 0;
    cal21.style.display = "none";
    if ( count22 % 2 == 0 ) {        
        cal22.style.display = "none";
        btn22.style.backgroundColor = "white";
        btn22.style.color ="black";
    } else {
        cal22.style.display = "flex";
        btn22.style.backgroundColor = "rgb(0, 52, 102)";
        btn22.style.color ="white";
        btn21.style.backgroundColor = "white";
        btn21.style.color ="black";
    }
})

/* 21학번까지 버튼 */
resultBtn21.addEventListener("click", function () {
    var f21 = parseInt(inputF21.value);
    var o21 = parseInt(inputO21.value);
    var s21 = parseInt(inputS21.value);
    
// f영역 ,o영역 80시간 이내 조건
if ( f21 > 80 ) {
    f21 = 80
} else if ( o21 > 80 ) {
    o21 = 80
} else if ( f21 > 80 && o21 > 80 ) {
    f21 = 80
    o21 = 80
} 

    // 총 이수 시간 ( 21학번 까지 제한된 조건으로 인한 총 이수 시간 판별 )
    var sumFOS21 = f21 + o21 + s21;
    if ( sumFOS21 < 150 ) {
        resultAllFOS21.style.color = "red";
    } else {
        resultAllFOS21.style.color = "blue";
    }
    resultAllFOS21.innerHTML = sumFOS21;

    if ( sumFOS21 >= 150 && ( f21 >= 40 && o21 >= 40 && s21 >= 30) ) {
        resultAll21.innerHTML = "충족"
        resultAll21.style.color = "blue";
        resultOk21.style.display = "none";
        resultNk21.style.display = "none";

        if ( f21 < 40 && o21 < 40 && s21 < 30 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( f21 < 40 && o21 < 40 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        } else if ( f21 < 40 && s21 < 30 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( o21 < 40  && s21 < 30 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( f21 < 40 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        } else if ( o21 < 40 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        } else if ( s21 < 30 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( f21 >= 40 && o21 >=40 && s21 >=30 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        }

    }
    
    else {
        resultAll21.innerHTML = "미충족"
        resultAll21.style.color = "red";
        resultOk21.style.display = "none";
        resultNk21.style.display = "none";

        if ( f21 < 40 && o21 < 40 && s21 < 30 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( f21 < 40 && o21 < 40 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        } else if ( f21 < 40 && s21 < 30 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( o21 < 40  && s21 < 30 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( f21 < 40 ) {
            resultF21.innerHTML = "부족"
            resultF21.style.color = "red";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        } else if ( o21 < 40 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "부족"
            resultO21.style.color = "red";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        } else if ( s21 < 30 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "부족"
            resultS21.style.color = "red";
        } else if ( f21 >= 40 && o21 >=40 && s21 >=30 ) {
            resultF21.innerHTML = "충족"
            resultF21.style.color = "blue";
            resultO21.innerHTML = "충족"
            resultO21.style.color = "blue";
            resultS21.innerHTML = "충족"
            resultS21.style.color = "blue";
        }
    }

});

/* 22학번 부터 버튼 */
resultBtn22.addEventListener("click", function () {
    var f22 = parseInt(inputF22.value);
    var o22 = parseInt(inputO22.value);
    var s22 = parseInt(inputS22.value);

    // 총 이수 시간
    var sumFOS22 = f22 + o22 + s22;

    if ( sumFOS22 < 100 ) {
        resultAllFOS22.style.color = "red";
    } else {
        resultAllFOS22.style.color = "blue";
    }
    resultAllFOS22.innerHTML = sumFOS22;
    
    if ( sumFOS22 >= 100 && ( f22 >= 30 && o22 >= 25 && s22 >= 35) ) {
        resultAll22.innerHTML = "충족"
        resultAll22.style.color = "blue";
        resultOk22.style.display = "none";
        resultNk22.style.display = "none";

        if ( f22 < 30 && o22 < 25 && s22 < 35 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( f22 < 30 && o22 < 25 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        } else if ( f22 < 30 && s22 < 35 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( o22 < 25  && s22 < 35 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( f22 < 30 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        } else if ( o22 < 25 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        } else if ( s22 < 35 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( f22 >= 30 && o22 >=25 && s22 >=35 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        }

    }
    
    else {
        resultAll22.innerHTML = "미충족"
        resultAll22.style.color = "red";
        resultOk22.style.display = "none";
        resultNk22.style.display = "none";

        if ( f22 < 30 && o22 < 25 && s22 < 35 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( f22 < 30 && o22 < 25 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        } else if ( f22 < 30 && s22 < 35 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( o22 < 25  && s22 < 35 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( f22 < 30 ) {
            resultF22.innerHTML = "부족"
            resultF22.style.color = "red";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        } else if ( o22 < 25 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "부족"
            resultO22.style.color = "red";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        } else if ( s22 < 35 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "부족"
            resultS22.style.color = "red";
        } else if ( f22 >= 30 && o22 >=25 && s22 >=35 ) {
            resultF22.innerHTML = "충족"
            resultF22.style.color = "blue";
            resultO22.innerHTML = "충족"
            resultO22.style.color = "blue";
            resultS22.innerHTML = "충족"
            resultS22.style.color = "blue";
        }
    }
    
})