(function () {
    //Global variables
    var _Score = 0;

    //Global functions
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

    //Application module
    var miniProject = angular.module("MiniProject", []);

    //Creates a service to fetch the question data for category one
    var CategoryOneLoader = miniProject.service('CategoryOneLoader', function ($http, $rootScope) {
        this.promise = null;
        function makeRequest() {
            return $http.get('/Home/Category_One_Question_Loader')
              .then(function (resp) {
                  return resp.data;
              });
        }
        this.getPromise = function (update) {
            if (update || !this.promise) {
                this.promise = makeRequest();
            }
            return this.promise;
        }

    });

    //Creates a service to fetch the question data for category two
    var CategoryTwoLoader = miniProject.service('CategoryTwoLoader', function ($http, $rootScope) {
        this.promise = null;
        function makeRequest() {
            return $http.get('/Home/Category_Two_Question_Loader')
              .then(function (resp) {
                  return resp.data;
              });
        }
        this.getPromise = function (update) {
            if (update || !this.promise) {
                this.promise = makeRequest();
            }
            return this.promise;
        }
    });

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

//Controller for the first game category
    var categoryOne = miniProject.controller("CategoryOneCtrl", function ($scope, $timeout, $window, $http, CategoryOneLoader) {
    //Scope variables
    $scope.question;
    $scope.answer = "";
    $scope.success = false;
    $scope.failure = false;
    $scope.disabled = false;
    $scope.gameEnded = false;
    $scope.isReady = false;
    $scope.score = 0;
    $scope.results = [];
    $scope.totalQuestions = 0;
    $scope.counter = 1;
    $scope.maxScore = 0;

    //Local variables
    var questionIndex = 0;
    var questionsArray = [];
    var result = {
        questionNumber: 0,
        givenAnswer: '',
        correctAnswer: '',
        mark: '',
        color: ''
    };

    

    //Fetches next question
    var nextQuestion = function (skipped) {
        if ($scope.counter >= $scope.totalQuestions) {
            $scope.gameEnded = true;
            console.log("no more questions");
            return;
        }
        //if the current question has been skipped
        if (skipped)
        {
            result = {
                questionNumber: $scope.counter,
                givenAnswer: '',
                correctAnswer: $scope.question.Word,
                mark: 'Skipped',
                color: 'warning'
            }

            $scope.results.push(result);
        }

        questionIndex++;
        $scope.counter++;
        $scope.disabled = false;
        $scope.success = false;
        $scope.failure = false;
        $scope.question = questionsArray[questionIndex];
        $scope.answer = '';
    };

    //Quits game to home screen
    var quit = function () {
        $window.location.href = "/Home/Index";
    };

    //Loading questionnaire
    CategoryOneLoader.getPromise().then(function (data) {
        questionsArray = angular.fromJson(data);
        $scope.totalQuestions = questionsArray.length;
        $scope.question = shuffleQuestions(questionsArray)[questionIndex];
        $scope.maxScore = $scope.totalQuestions * 2;
        $scope.isReady = true;
    });

    $scope.checkAnswer = function () {
        if ($scope.answer.toLowerCase() === $scope.question.Word.toLowerCase()) {
            $scope.success = true;
            $scope.failure = false;
            _Score+=2;
            $scope.score = _Score;
            result = {
                questionNumber: $scope.counter,
                givenAnswer: $scope.answer,
                correctAnswer: $scope.question.Word,
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
                correctAnswer: $scope.question.Word,
                mark: 'Incorrect!',
                color: 'danger'
            }

            $scope.results.push(result);
            console.log("failure");
        }

        $scope.disabled = true;
        $timeout(nextQuestion, 3000);
        console.log($scope.question);
    };

    //Reloads the current game
    $scope.reload = function () {
        $window.location.reload();
    };

    $scope.nextQuestion = nextQuestion;
    $scope.quit = quit;
    });

    //Controller for the first game category
    var categoryTwo = miniProject.controller("CategoryTwoCtrl", function ($scope, $timeout, $window, $http, CategoryTwoLoader) {
        //Scope variables
    });
})();
