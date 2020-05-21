let certificateData = [
    {
        src: "img/javascriptCourse.png",
        alt: "Modern Javascript",
        certificateNo: "UC-Z4GSONVG"
    },
    {
        src: "img/OOJavascript.png",
        alt: "Object Oriented Javascript",
        certificateNo: "cert_679dw1jm"
    }
];

const displayCertificates = function () {
    $.each(certificateData, (index, value) => {
        $(".certificates").append("<div class='certificate" + value.certificateNo + "'></div>");
        $(".certificate" + value.certificateNo).append("<img src='" + value.src + "' " + "alt='" + value.alt + "' height='320px' width='370px'>");
    });
};