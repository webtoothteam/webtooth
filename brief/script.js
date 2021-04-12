

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

        let rotationY = x * 10 / halfTrackingAreaWidth;
        let rotationX = -y * maxRotationDegreesY/ halfTrackingAreaHeight;



        let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.2, 1.2)`;
        let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.4)`;

        $("#ellipse2").css("-webkit-transform", transform);
        $("#ellipse2").css("-moz-transform", transform);
        $("#ellipse2").css("-ms-transform", transform);
        $("#ellipse2").css("-o-transform", transform);
        $("#ellipse2").css("transform", transform);
        $("#txt").css("transform", transform);
        $("#ellipse2").css("box-shadow", "0px 4px 30px 9px rgba(249, 180, 24, 0.2)");


    });

    $(".sendBrief").on("mouseleave", function () {
        let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;
        $("#ellipse2").css("transform", transform);
        // $("#txt").css("transition", 'all .5s ease-out' );
        $("#txt").css("transform", transform );
        $("#ellipse2").css("box-shadow", "none");

    });
});