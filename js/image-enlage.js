var count = 0;
        $("#schoolbus-image").click(function () {
            if (count % 2 == 0) {
                $("#schoolbus-image").addClass("image-enlarge");
                count++;
            } else {
                $("#schoolbus-image").removeClass("image-enlarge");
                count++;
            }
        });