var input1 = document.getElementById("elective-1");
var input2 = document.getElementById("elective-2");
var input3 = document.getElementById("elective-3");
var input4 = document.getElementById("major-1");
var input5 = document.getElementById("major-2");
var input6 = document.getElementById("total-credit1");

var input1e1 = document.getElementById("elective-4");
var input2e2 = document.getElementById("elective-5");
var input3e3 = document.getElementById("elective-6");
var input4m1 = document.getElementById("major-4");
var input5m2 = document.getElementById("major-5");
var input6t1 = document.getElementById("total-credit2");

var btn = document.getElementById("credit-result-btn");

var e1r = document.getElementById("credit-e1-val");
var e2r = document.getElementById("credit-e2-val");
var e3r = document.getElementById("credit-e3-val");
var m1r = document.getElementById("credit-m1-val");
var m2r = document.getElementById("credit-m2-val");
var t1r = document.getElementById("credit-total-val");

var e1rt = document.getElementById("credit-e1-txt");
var e2rt = document.getElementById("credit-e2-txt");
var e3rt = document.getElementById("credit-e3-txt");
var m1rt = document.getElementById("credit-m1-txt");
var m2rt = document.getElementById("credit-m2-txt");
var t1rt = document.getElementById("credit-total-txt");

var ok = document.getElementById("credit-result-val-ok");
var s = document.getElementById("credit-result-val");
var nk = document.getElementById("credit-result-val-nk");


btn.addEventListener("click", function() {
    var e1 = parseInt(input1.value);
    var e2 = parseInt(input2.value);
    var e3 = parseInt(input3.value);
    var m1 = parseInt(input4.value);
    var m2 = parseInt(input5.value);
    var total1 = parseInt(input6.value);

    var e4 = parseInt(input1e1.value);
    var e5 = parseInt(input2e2.value);
    var e6 = parseInt(input3e3.value);
    var m3 = parseInt(input4m1.value);
    var m4 = parseInt(input5m2.value);
    var total2 = parseInt(input6t1.value);

    if( total1 >= 0 && total1 <= 137 && total2 >= 0 ) { // 1차 만족 조건

        /* 교양 필수 조건 */
        if( e1 >= 10 &&  e1 <= 17 && e4 >= 0 && e4 <= 17 ){
            if( e1 > e4 ) { // 부족
                e1r.innerHTML = "학점 부족";
                e1r.style.color = "red";
    
                e1rt.innerHTML = (e1-e4)+"학점 더 이수 해야 합니다";
                e1rt.style.color ="red";
    
            } else if ( e4 == e1 ) { // 달성
                e1r.innerHTML = "학점 충족";
                e1r.style.color = "blue";
    
                e1rt.innerHTML = "이수 완료!!";
                e1rt.style.color = "blue";
            } 
        } else if ( e1 > 17 || e4 > 17 ) { // 초과 오류
                e1r.innerHTML = "오류";
                e1r.style.color = "red";
    
                e1rt.innerHTML = "최대 17학점을 초과할 수 없습니다";
                e1rt.style.color = "red";
        }
        
        else { // 오류
                e1r.innerHTML = "오류";
                e1r.style.color = "red";
    
                e1rt.innerHTML = "학점을 정확히 입력해주세요";
                e1rt.style.color ="red";
        }
        

        /* 교양 선택 조건 */
        if ( e2 >=13 &&  e2 <= 20 && e5 >= 0 && e5 <= 38 ) {
            if  ( e5 < e2 ) { // 부족
                e2r.innerHTML = "학점 부족";
                e2r.style.color = "red";
    
                e2rt.innerHTML = (e2-e5)+"학점 더 이수 해야 합니다";
                e2rt.style.color = "red";
    
            } else if ( e5 >= e2 ) { // 달성
                e2r.innerHTML = "학점 충족";
                e2r.style.color = "blue";
    
                e2rt.innerHTML = "이수 완료!!";
                e2rt.style.color = "blue";
    
            } 
        } else if ( e2 > 20 || e5 > 38  ) { // 초과 오류
                e2r.innerHTML = "오류";
                e2r.style.color = "red";
    
                e2rt.innerHTML = "38학점 초과할 수 없습니다";
                e2rt.style.color = "red";
        } else { // 오류
            e2r.innerHTML = "오류";
            e2r.style.color = "red";

            e2rt.innerHTML = "학점을 정확히 입력해주세요";
            e2rt.style.color ="red";

        }

        /*  기초 조건 */
        if ( e3 >= 0 && e3 <= 9 && e6 >= 0 &&  e6 <= 9 ) {
            if ( e6 < e3 ) { // 부족
                e3r.innerHTML = "학점 부족";
                e3r.style.color = "red";

                e3rt.innerHTML = (e3-e6)+"학점 더 이수 해야 합니다";
                e3rt.style.color = "red";

            } else if ( e6 == e3 ) { // 달성
                e3r.innerHTML = "학점 충족";
                e3r.style.color = "blue";

                e3rt.innerHTML = "이수 완료!!";
                e3rt.style.color = "blue";

            }
        } else if ( e3 > 9 || e6 > 9 ) { // 초과 오류
            e3r.innerHTML = "오류";
            e3r.style.color = "red";

            e3rt.innerHTML = "최대 9학점을 초과할 수 없습니다";
            e3rt.style.color ="red";
        } else { // 오류
            e3r.innerHTML = "오류";
            e3r.style.color = "red";

            e3rt.innerHTML = "학점을 정확히 입력해주세요";
            e3rt.style.color ="red";
        }

        /* 전공 필수 조건 */
        if ( m1 >= 0 && m1 <= 66 && m3 >= 0 && m3 <= 66 ) { 
            if ( m3 < m1 ) { // 부족
                m1r.innerHTML = "학점 부족";
                m1r.style.color = "red";

                m1rt.innerHTML = (m1-m3)+"학점 더 이수 해야 합니다";
                m1rt.style.color = "red";

            } else if ( m3 == m1 ) { // 달성
                m1r.innerHTML = "학점 충족";
                m1r.style.color = "blue";

                m1rt.innerHTML = "이수 완료!!";
                m1rt.style.color = "blue";

            } 
        } else if ( m1 > 66 || m3 > 66 ) { // 초과 오류
            m1r.innerHTML = "오류";
            m1r.style.color = "red";

            m1rt.innerHTML = "최대 66학점을 초과할 수 없습니다";
            m1rt.style.color ="red";

        } else { // 오류
            m1r.innerHTML = "오류";
            m1r.style.color = "red";

            m1rt.innerHTML = "학점을 정확히 입력해주세요";
            m1rt.style.color ="red";
        }

        /* 전공 선택 조건 */
        if ( m2 >= 0 && m2 <= 66 && m4 >= 0 && m4 <= 95 ) { 
            if ( m4 >= m2 ) { // 달성
                m2r.innerHTML = "학점 충족";
                m2r.style.color = "blue";

                m2rt.innerHTML = "이수 완료!!";
                m2rt.style.color = "blue";

            } else if ( m4<m2 ) { // 부족
                m2r.innerHTML = "학점 부족";
                m2r.style.color = "red";

                m2rt.innerHTML = (m2-m4)+"학점 더 이수 해야 합니다";
                m2rt.style.color = "red";

            }
        } else if ( m2 > 66 || m4 > 95 ) { // 초과 오류
            m2r.innerHTML = "오류";
            m2r.style.color = "red";

            m2rt.innerHTML = "66,95학점을 초과할 수 없습니다";
            m2rt.style.color ="red";

        } else {
            m2r.innerHTML = "오류";
            m2r.style.color = "red";

            m2rt.innerHTML = "학점을 정확히 입력해주세요";
            m2rt.style.color ="red";
        }

        /* 총 학점 조건 */
        if( total1 <= total2 ){ // 달성
            t1r.innerHTML = "학점 충족";
            t1r.style.color = "blue";
        
            t1rt.innerHTML = "이수 완료!!";
            t1rt.style.color = "blue";
        } else { // 부족
            t1r.innerHTML = "학점 부족";
            t1r.style.color = "red";
        
            t1rt.innerHTML = (total1-total2)+"학점 더 이수 해야 합니다";
            t1rt.style.color = "red";
        }

        /* 졸업조건 */
        if( // 불가
            e1r.style.color =="red" || e2r.style.color =="red" ||
            e3r.style.color =="red" || m1r.style.color =="red" ||
            m2r.style.color =="red" || t1r.style.color =="red") {
            ok.style.display = "none";
            s.style.display = "none";
            nk.style.display ="block"
            nk.innerHTML = "미충족"
            
        } else { // 가능
            ok.style.display = "block";
            s.style.display = "none";
            nk.style.display = "none";
        }
    }

    else { // 오류
        e1r.innerHTML = "오류";
        e1r.style.color = "red";
    
        e1rt.innerHTML = "학점을 정확히 입력해주세요";
        e1rt.style.color = "red";

        e2r.innerHTML = "오류";
        e2r.style.color = "red";
    
        e2rt.innerHTML = "학점을 정확히 입력해주세요";
        e2rt.style.color = "red";

        e3r.innerHTML = "오류";
        e3r.style.color = "red";
    
        e3rt.innerHTML = "학점을 정확히 입력해주세요";
        e3rt.style.color = "red";

        m1r.innerHTML = "오류";
        m1r.style.color = "red";
    
        m1rt.innerHTML = "학점을 정확히 입력해주세요";
        m1rt.style.color = "red";

        m2r.innerHTML = "오류";
        m2r.style.color = "red";
    
        m2rt.innerHTML = "학점을 정확히 입력해주세요";
        m2rt.style.color = "red";

        t1r.innerHTML = "오류";
        t1r.style.color = "red";
    
        t1rt.innerHTML = "학점을 정확히 입력해주세요";
        t1rt.style.color = "red";

        ok.style.display = "none";
        s.style.display = "none";
        nk.style.display = "block";
        nk.innerHTML = "오류"
        
    }
})

