var intFrameWidth = window.innerWidth;
            var enable = 0;
    
            if(intFrameWidth < 767 ) {
                $("#school-bus-td1").click(function () {
                    document.querySelector("#school-bus1").scrollIntoView();                 
                })

                $("#school-bus-td2").click(function () {
                    document.querySelector("#school-bus2").scrollIntoView();                 
                })

                $("#school-bus-td3").click(function () {
                    document.querySelector("#school-bus2").scrollIntoView();                 
                })

                $("#school-bus-td4").click(function () {
                    document.querySelector("#school-bus2").scrollIntoView();                 
                })

                $("#school-bus-td5").click(function () {
                    document.querySelector("#school-bus3").scrollIntoView();                 
                })

                $("#school-bus-td6").click(function () {
                    document.querySelector("#school-bus4").scrollIntoView();                 
                })

                $("#school-bus-td7").click(function () {
                    document.querySelector("#school-bus5").scrollIntoView();                 
                })

                $("#school-bus-td8").click(function () {
                    document.querySelector("#school-bus5").scrollIntoView();                 
                })
                $("#school-bus-td9").click(function () {
                    document.querySelector("#school-bus6").scrollIntoView();                 
                })

            } else {
                //height 라는 변수에 t1 이라는 이름의 클래스명을 가진 위치값을 받아온다.
                var height1 = $("#school-bus1").offset();
                var height2 = $("#school-bus2").offset();
                var height3 = $("#school-bus3").offset();
                var height4 = $("#school-bus4").offset();
                var height5 = $("#school-bus5").offset();
                var height6 = $("#school-bus6").offset();
                var height7 = $("#school-bus7").offset();
                var height8 = $("#school-bus8").offset();
                var height9 = $("#school-bus9").offset();

                //animate의안에 들어가는 매개 변수는 1번째는 움직일 위치 2번째는 속도이다.
                //heigh의 top 위치로 이동 시킨다.
                $("#school-bus-td1").click(function () {
                    $("html, body").animate({
                        scrollTop: 1790
                    }, 400);
                })

                $("#school-bus-td2").click(function () {
                    $("html, body").animate({
                        scrollTop: 2340
                    }, 400);
                })

                $("#school-bus-td3").click(function () {
                    $("html, body").animate({
                        scrollTop: 2890
                    }, 400);
                })

                $("#school-bus-td4").click(function () {
                    $("html, body").animate({
                        scrollTop: 3340
                    }, 400);
                })

                $("#school-bus-td5").click(function () {
                    $("html, body").animate({
                        scrollTop: 3810
                    }, 400);
                })

                $("#school-bus-td6").click(function () {
                    $("html, body").animate({
                        scrollTop: 4340
                    }, 400);
                })

                $("#school-bus-td7").click(function () {
                    $("html, body").animate({
                        scrollTop: 4940
                    }, 400);
                })

                $("#school-bus-td8").click(function () {
                    $("html, body").animate({
                        scrollTop: 5440
                    }, 400);
                })

                $("#school-bus-td9").click(function () {
                    $("html, body").animate({
                        scrollTop: 5920
                    }, 400);
                })
            }