

let maxRotationDegreesX = 31;
let maxRotationDegreesY = 31;
let perspectivePx = 600;

$(document).ready(function () {

    let trackingAreaShiftX = $(".sendBrief").offset().left;
    let trackingAreaShiftY = $(".sendBrief").offset().top;

    let halfTrackingAreaWidth = $(".sendBrief").width() / 2;
    let halfTrackingAreaHeight = $(".sendBrief").height() / 2;

    let mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth;
    let mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight;

    $(".sendBrief").on("mousemove", function () {

        let x = event.clientX - mouseCoordinateCorrectionX;
        let y = event.clientY - mouseCoordinateCorrectionY;

        // let rotationY = x * 10 / halfTrackingAreaWidth;
        // let rotationX = -y * maxRotationDegreesY/ halfTrackingAreaHeight;
        let rotationY = x * 10 / halfTrackingAreaWidth;
        let rotationX = (-y * 1.9 / halfTrackingAreaHeight) * (0.8);


        // let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.2, 1.2)`;
        // let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.4)`;
        let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX * 0.2}deg) rotate3d(0, 1, 0, ${rotationY * 2}deg ) scale(1.2, 1.2)`;
        let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY * 2}deg ) scale(1.3, 1.3)`;

        $("#ellipse2").css("-webkit-transform", transform);
        $("#ellipse2").css("-moz-transform", transform);
        $("#ellipse2").css("-ms-transform", transform);
        $("#ellipse2").css("-o-transform", transform);
        $("#ellipse2").css("transform", transform);
        $("#txt").css({
            "transform": transform2,
            'text-shadow': `${rotationY * 0.15}px ${rotationX * 0.15}px 2px #A0968F`
        });
        $("#ellipse2").css("box-shadow", "0px 4px 30px 4px rgba(249, 180, 24, 0.2)");


    });

    $(".sendBrief").on("mouseleave", function () {
        let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;
        $("#ellipse2").css("transform", transform);
        // $("#txt").css("transition", 'all .5s ease-out' );
        $("#txt").css("transform", transform);
        $("#ellipse2").css("box-shadow", "none");

        $("#txt").css({
            "transform": transform,
            'text-shadow': `0px 0px 0px `
        });

    });
});


$(document).ready(function () {

    const trackingAreaShiftX = $(".fill-brief").offset().left;
    const trackingAreaShiftY = $(".fill-brief").offset().top;

    const halfTrackingAreaWidth = $(".fill-brief").width() / 2;
    const halfTrackingAreaHeight = $(".fill-brief").height() / 2;

    const mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth * 2;
    const mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight * 2;

    let ellipse = $(".ellipse");
    let inner = $(".ellipse").html;

    $(`.fill-brief`).on("mousemove", function () {


        let x = event.clientX - mouseCoordinateCorrectionX;
        let y = event.clientY - mouseCoordinateCorrectionY;

        let rotationY = x * 20 / halfTrackingAreaWidth;
        let rotationX = (-y * 10 / halfTrackingAreaHeight) * (0.8);

        let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.05, 1.05)`;
        let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY * 2}deg ) scale(1.3, 1.3)`;

        $(ellipse).css("transform", transform);
        $(inner).css({
            "transform": transform2,
            'text-shadow': `${rotationY * 0.15}px ${rotationX * 0.15}px 2px #A0968F`
        });
        $(ellipse).css("box-shadow", "0px 4px 30px 4px rgba(249, 180, 24, 0.2)");
    });

    $(`.fill-brief`).on("mouseleave", function () {

        let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;

        $(ellipse).css("transform", transform);
        $(ellipse).css("box-shadow", "none");

        $(inner).css({
            "transform": transform,
            'text-shadow': `0px 0px 0px `
        });
        $(ellipse).css("background-color", " transparent");
    });

});

$("button").click(function () {
    if ($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        $(this).css({
            "border": "1px solid white",
            "color": "white"
        })
    }
    else {
        $(this).attr('data-click-state', 1);
        $(this).css({
            "border": "1px solid orange",
            "color": "orange",
            "transition": ".15s",
        })
    }
})
