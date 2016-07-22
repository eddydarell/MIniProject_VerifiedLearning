//Global variables and functions
var _Score = 0;

//app module
var miniProject = angular.module("MiniProject", []);

//Controller for the index page
var indexCtrl = miniProject.controller("IndexCtrl", function ($window, $scope, $http) {
    $scope.categoryNumber = 0;

    $scope.loadCategory = function () {
        $http.get("/Home/QuestionBoard/")
                .success(function (data, header, status, config) {
                    console.log("Success!");
                    $window.location.href = "/Home/QuestionBoard?categoryNumber=" + $scope.categoryNumber;
                })
                .error(function (data, header, status, config) {
                    console.log("Failure");
                    console.log(data);
                });
    };
});

//COntroller for the first game category
var categoryOne = miniProject.controller("CategoryOneCtrl", function ($scope, $timeout, $window) {
    $scope.question;
    $scope.answer = "";
    $scope.success = false;
    $scope.failure = false;
    $scope.disabled = false;
    $scope.gameEnded = false;
    $scope.score = 0;
    var questionIndex = 0;

    var question1 = {
        correctAnswer: "square",
        imageUrl: "https://i.ytimg.com/vi/rb8Y38eilRM/maxresdefault.jpg"
    };

    var question2 = {
        correctAnswer: "circle",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/2000px-Circle_-_black_simple.svg.png"
    };

    var question3 = {
        correctAnswer: "triangle",
        imageUrl: "http://vignette2.wikia.nocookie.net/uncyclopedia/images/8/88/Triangle(shape).jpg/revision/latest?cb=20121214140518"
    };

    var question4 = {
        correctAnswer: "hexagon",
        imageUrl: "https://image.freepik.com/free-icon/hexagon-geometrical-shape-outline_318-48664.png"
    };

    var questions = [question1, question2, question3, question4];

    $scope.results = [];

    var result = {
        questionNumber: 0,
        givenAnswer: '',
        correctAnswer: '',
        mark: '',
        color: ''
    };

    //Function to shuffle the array of questions
    var shuffleQuestions = function (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a;
    };


    $scope.counter = 1;
    $scope.totalQuestions = questions.length;
    $scope.question = shuffleQuestions(questions)[questionIndex];

    $scope.checkAnswer = function () {
        if ($scope.answer.toLowerCase() === $scope.question.correctAnswer) {
            $scope.success = true;
            $scope.failure = false;
            _Score++;
            $scope.score = _Score;
            result = {
                questionNumber: $scope.counter,
                givenAnswer: $scope.answer,
                correctAnswer: $scope.question.correctAnswer,
                mark: 'Correct!',
                color: 'success'
            }

            $scope.results.push(result);
            console.log("success");

        }
        else {
            $scope.success = false;
            $scope.failure = true;
            result = {
                questionNumber: $scope.counter,
                givenAnswer: $scope.answer,
                correctAnswer: $scope.question.correctAnswer,
                mark: 'Incorrect!',
                color: 'danger'
            }

            $scope.results.push(result);
            console.log("failure");
        }

        $scope.disabled = true;
        $timeout(nextQuestion, 3000);
    };

    $scope.reload = function () {
        $window.location.reload();
    };

    //Function to skip to the next question
    var nextQuestion = function () {
        if ($scope.counter >= $scope.totalQuestions) {
            $scope.gameEnded = true;
            console.log("no more questions");
            return;
        }
        questionIndex++;
        $scope.counter++;
        $scope.disabled = false;
        $scope.success = false;
        $scope.failure = false;
        $scope.question = questions[questionIndex];
        $scope.answer = '';
    };

    var quit = function () {
        $window.location.href = "/Home/Index";
    };

    $scope.nextQuestion = nextQuestion;
    $scope.quit = quit;
});