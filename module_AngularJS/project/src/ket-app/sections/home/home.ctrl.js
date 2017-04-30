"use strict";

angular
    .module("ketApp.core")
    .controller("HomeCtrl", ["$scope", "$document", "$http","MenuValue", function($scope, $document, $http, MenuValue) {
        const self = this;

        MenuValue.items = [
            { id: "top", display: "Home" },
            { id: "services", display: "Services" },
            { id: "portfolio", display: "Portfolio" },
            { id: "about", display: "About" },
            { id: "news", display: "News" },
            { id: "contact", display: "Contact" },
        ];

        setActiveService("service-web");

        self.portfolioWorks = [
            { category: "web", title: "Sample image", subtitle: "Web", image: "assets/images/portfolio/portfolio-1.jpeg" },
            { category: "web", title: "Sample image", subtitle: "Web", image: "assets/images/portfolio/portfolio-2.jpeg" },
            { category: "web", title: "Sample image", subtitle: "Web", image: "assets/images/portfolio/portfolio-3.jpeg" },
            { category: "web", title: "Sample image", subtitle: "Web", image: "assets/images/portfolio/portfolio-4.jpeg" },
            { category: "photography", title: "Sample image", subtitle: "Photography", image: "assets/images/portfolio/portfolio-5.jpeg" },
            { category: "photography", title: "Sample image", subtitle: "Photography", image: "assets/images/portfolio/portfolio-6.jpeg" },
            { category: "photography", title: "Sample image", subtitle: "Photography", image: "assets/images/portfolio/portfolio-7.jpeg" },
            { category: "photography", title: "Sample image", subtitle: "Photography", image: "assets/images/portfolio/portfolio-8.jpeg" },
            { category: "graphic-design", title: "Sample image", subtitle: "Graphic design", image: "assets/images/portfolio/portfolio-9.jpeg" },
            { category: "graphic-design", title: "Sample image", subtitle: "Graphic design", image: "assets/images/portfolio/portfolio-10.jpeg" },
            { category: "graphic-design", title: "Sample image", subtitle: "Graphic design", image: "assets/images/portfolio/portfolio-11.jpeg" },
            { category: "graphic-design", title: "Sample image", subtitle: "Graphic design", image: "assets/images/portfolio/portfolio-12.jpeg" }
        ];
        self.activePortfolioCategory = "*";
        setActivePortfolioCategory(self.activePortfolioCategory);
        $(".work-tabs__nav").on("click", ".work-tabs__nav-item", changeActivePortfolioTab);

        self.achievements = [
            { classOfIcon: "achievement__icon_projects", count: 3054, title: "Completed projects" },
            { classOfIcon: "achievement__icon_pressed", count: 7234873, title: "Click pressed" },
            { classOfIcon: "achievement__icon_sented", count: 4670, title: "Mails sented & recived" },
            { classOfIcon: "achievement__icon_tolds", count: 939, title: "Jokes tolds" }
        ];

        self.members = [
            { name: "John Doe", occupation: "Graphic Designer", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque provident quasi voluptatibus.", photo: "assets/images/team-members/team-member-1.jpeg"},
            { name: "Nick Superstar", occupation: "Software Engineer", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque provident quasi voluptatibus.", photo: "assets/images/team-members/team-member-2.jpeg"},
            { name: "Alex Smith", occupation: "Support Engineer", description: "Lorem ipsr adipisicing elit. Doloremque provdsfsdfsd sdf rgeer dfg gd ident quasi voluptatibus.", photo: "assets/images/team-members/team-member-3.jpeg"},
            { name: "Peter D'Alonzo", occupation: "Web-analyst", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque provident quasi voluptatibus.", photo: "assets/images/team-members/team-member-4.jpeg"}
        ];

        downloadNews();

        self.setActiveService = setActiveService;
        self.setActivePortfolioCategory = setActivePortfolioCategory;
        self.filterWorksByCategory = filterWorksByCategory;
        self.goToTheSection = goToTheSection;
        self.getInputError = getInputError;

        function setActiveService(serviceId) {
            const oldActiveService = document.querySelector(".service.active"),
                newActiveService = document.getElementById(serviceId);

            if (oldActiveService) {
                oldActiveService.classList.remove("active");
            }

            if (newActiveService) {
                newActiveService.classList.add("active");
            }

            self.activeService = serviceId;
        }

        function setActivePortfolioCategory(category) {
            self.activePortfolioCategory = category;
        }

        function filterWorksByCategory(work) {
            if ((self.activePortfolioCategory === "*") || (self.activePortfolioCategory === work.category)) {
                return work;
            }
        }

        function changeActivePortfolioTab(event) {
            $(".work-tabs__nav-item").filter(".active").removeClass("active");
            $(event.target).addClass("active");
        }

        function downloadNews() {
            $http({
                method: "GET",
                url: "assets/data/data.json"
            }).then((newsData) => {
                self.newsData = newsData.data;
            }, (err) => {
                console.log("Cannot download news. " + err);
            })
        }

        function goToTheSection(sectionId) {
            return $document.scrollTo(document.getElementById(sectionId), 0, 500);
        }

        function getInputError(error, errorMessage) {
            if (!angular.isDefined(error)) {
                return;
            }
            if (error.required) {
                return "No data entered";
            }
            return errorMessage;
        }
    }]);