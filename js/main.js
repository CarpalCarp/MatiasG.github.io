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
    },
    {
        src: "img/Angular4Completion.PNG",
        alt: "Angular 4: Beginner to Pro",
        certificateNo: "cert_wsnrxxk2"
    }
];

let projectData = [
    {
        id: 1,
        name: "Pizza Delivery",
        src: "img/PizzaDelivery.PNG",
        url: "https://carpalcarp.github.io/pizza-delivery/",
        description: "This was a group project from a Human Computer Interactions class I took in the University. The purpose is to create a front-end app for those with visual disabilities. The problem was that none in our group including me knew a framework so we created multiple HTML pages and put them together. After I learned Angular, I recreated this project. See Pizza Delivery Angular App."
    },
    {
        id: 2,
        name: "Pizza Delivery Angular App",
        src: "img/PizzaDeliveryAppAngular.PNG",
        url: "https://carpalcarp.github.io/pizza-delivery-Angular/",
        description: "This is my recreation of the group project I made for the Human Computer Interactions class. I added a few more features as well such as taking card information and checking for form errors."
    },
    {
        id: 3,
        name: "League Management",
        src: "img/LeagueManagement.PNG",
        url: "https://carpalcarp.github.io/League-Management-Website/",
        description: "This was a project I made in one of my web classes. It is the pure front-end of a league management system. Most of the links don't work since it only displays information about teams and players. This project was the preceding one before we had to create the backend in PHP. The backend is not provided."
    }
]

const displayCertificates = function () {
    $.each(certificateData, (index, value) => {
        $(".certificates").append("<div class='certificate" + value.certificateNo + "'></div>");
        $(".certificate" + value.certificateNo).append("<img src='" + value.src + "' " + "alt='" + value.alt + "' height='320px' width='370px'>");
    });
};

const displayProjects = function () {
    $.each(projectData, (index, value) => {
        // 1. add column div then projectId div inside with class card
        $(".github-pages-projects").append("<div class='col-md-6'><div class='project" + value.id + " card bg-info'></div></div>");
        // 2. add image
        $(".project" + value.id).append("<img src='" + value.src + "' " + "alt='" + value.alt + "' height='300px' width='100%'>");
        // 3. add project name
        $(".project" + value.id).append("<h3>" + value.name + "</h3>");
        // 4. add project description with a button to a link to page
        $(".project" + value.id).append("<div class='card-body'><p>" + value.description + "</p><a href='" + value.url + "' target='_blank' class='btn btn-light'>Go to page</a></div>");
    });
};
