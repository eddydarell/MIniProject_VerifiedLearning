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

    //Creates a service to fetch the question data for category three
    var CategoryTwoLoader = miniProject.service('CategoryThreeLoader', function ($http, $rootScope) {
        this.promise = null;
        function makeRequest() {
            return $http.get('/Home/Category_Three_Question_Loader')
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
            if (skipped) {
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
                _Score += 2;
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

    //Controller for the second game category
    var categoryTwo = miniProject.controller("CategoryTwoCtrl", function ($sce, $scope, $timeout, $window, $http, CategoryTwoLoader, $compile) {
        //Scope variables
        $scope.question = {
            Sequence: ''
        };

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

        //Switches focus on input change
        var switchFocus = function () {
            var inputs = angular.element(document.querySelectorAll(".single-character"));
            var nextInput = inputs.get(inputs.index(this) + 1);
            if (nextInput) {
                nextInput.focus();
            }

            console.log("changed");
        };

        //Fetches next question
        var nextQuestion = function (skipped) {
            if ($scope.counter >= $scope.totalQuestions) {
                $scope.gameEnded = true;
                console.log("no more questions");
                return;
            }
            //if the current question has been skipped
            if (skipped) {
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
            $scope.deliberatelyTrustDangerousSnippet();

            console.log($scope.question);

            $scope.answer = '';
        };

        //Quits game to home screen
        var quit = function () {
            $window.location.href = "/Home/Index";
        };

        //Loading questionnaire
        CategoryTwoLoader.getPromise().then(function (data) {
            questionsArray = angular.fromJson(data);
            $scope.totalQuestions = questionsArray.length;
            $scope.question = shuffleQuestions(questionsArray)[questionIndex];
            $scope.maxScore = $scope.totalQuestions * 2;
            $scope.isReady = true;
            $scope.deliberatelyTrustDangerousSnippet();
            console.log(questionsArray);
        });

        //Function to display HTML element from string
        $scope.deliberatelyTrustDangerousSnippet = function () {
            $scope.question.displaySentence = $scope.question.Sequence.replace(/[!?,.;:']/g, '<input type="text" placeholder="*" ng-change="switchFocus()" maxlength="1" class="single-character"/>');
            return $sce.trustAsHtml($scope.question.displaySentence);
        };

        $scope.checkAnswer = function () {
            //Gets all the inputs and their values
            var elements = angular.element(document.querySelectorAll(".single-character"));
            var log = [];
            var typedSequence = '';
            var punctuationSequence = '';

            angular.forEach(elements, function (value, key) {
                this.push(value);
            }, log);

            //Build a punctuation sign character sequence to compare to the given sequence
            for (var i = 0; i < log.length; i++) {
                typedSequence += log[i].value;
                console.log(log[i].value);
            }

            punctuationSequence = $scope.question.Sequence.replace(/[a-zA-Z0-9_ ]/g, "");

            if (typedSequence === punctuationSequence) {
                $scope.success = true;
                $scope.failure = false;

                _Score += 2;
                $scope.score = _Score;
                result = {
                    questionNumber: $scope.counter,
                    givenAnswer: typedSequence,
                    correctAnswer: punctuationSequence,
                    mark: 'Correct!',
                    color: 'success'
                }

                $scope.results.push(result);
                console.log("Success!!");
            }
            else {
                $scope.failure = true;
                $scope.success = false;
                result = {
                    questionNumber: $scope.counter,
                    givenAnswer: typedSequence,
                    correctAnswer: punctuationSequence,
                    mark: 'Incorrect!',
                    color: 'danger'
                }

                $scope.results.push(result);
                console.log("Failure!!");
            }
            console.log(typedSequence + " - " + punctuationSequence);
            $timeout(nextQuestion, 3000);
            punctuationSequence = '';
            typedSequence = '';
        };

        $scope.quit = quit;
        $scope.nextQuestion = nextQuestion;
        $scope.switchFocus = switchFocus;
        $scope.reload = function () {
            $window.location.reload();
        };
    });
    //Controller for the third game category
    var categoryThree = miniProject.controller("CategoryThreeCtrl", function ($sce, $scope, $timeout, $window, $http, CategoryThreeLoader, $compile) {
        //Scope variables
        $scope.question = {
            colorName: '',
            colorHex: ''
        };

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
        $scope.boxes = {
            firstColor: '',
            secondColor: '',
            thirdColor: '',
            fourthColor: ''
        };

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
            if (skipped) {
                result = {
                    questionNumber: $scope.counter,
                    givenAnswer: 'NoColor',
                    correctAnswer: $scope.question.ColorName,
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
            assignColors(questionsArray, $scope.question);
            console.log($scope.question);

            $scope.answer = '';
        };

        //Quits game to home screen
        var quit = function () {
            $window.location.href = "/Home/Index";
        };

        //Assigns the different colors to the answer boxes
        var assignColors = function (colorArray, actualColor) {
            colorArray = shuffleQuestions(colorArray);
            var tempColorArray = colorArray.slice(0);
            var pickUps = [];

            //If the actual color exists in the array , we get rid of it to avoid redundancy
            var index = tempColorArray.indexOf(actualColor);
            if (index > -1) {
                tempColorArray.splice(index, 1);
            }

            pickUps = [actualColor.ColorName, tempColorArray[0].ColorName, tempColorArray[1].ColorName, tempColorArray[2].ColorName];
            pickUps = shuffleQuestions(pickUps);
            $scope.boxes = {
                firstColor: pickUps[0] + ' color-box',
                secondColor: pickUps[1] + ' color-box',
                thirdColor: pickUps[2] + ' color-box',
                fourthColor: pickUps[3] + ' color-box'
            };
        };

        //Loading questionnaire
        CategoryThreeLoader.getPromise().then(function (data) {
            questionsArray = angular.fromJson(data);
            $scope.totalQuestions = questionsArray.length;
            $scope.question = shuffleQuestions(questionsArray)[questionIndex];
            $scope.maxScore = $scope.totalQuestions * 2;
            $scope.isReady = true;

            //Assigns the colors
            assignColors(questionsArray, $scope.question)
            console.log(questionsArray);
        });

        $scope.checkAnswer = function (box) {
            switch (box) {
                case 1:
                    var name = $scope.boxes.firstColor.replace(/ color-box/, "");
                    if ($scope.question.ColorName === name) {
                        $scope.success = true;
                        $scope.failure = false;

                        _Score += 2;
                        $scope.score = _Score;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Correct!',
                            color: 'success'
                        }

                        $scope.results.push(result);
                        console.log("Success!!");
                    }
                    else
                    {
                        $scope.failure = true;
                        $scope.success = false;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Incorrect!',
                            color: 'danger'
                        }

                        $scope.results.push(result);
                        console.log("Failure!!");
                    }
                    break;
                case 2:
                    var name = $scope.boxes.secondColor.replace(/ color-box/, "");
                    if ($scope.question.ColorName === name) {
                        $scope.success = true;
                        $scope.failure = false;

                        _Score += 2;
                        $scope.score = _Score;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Correct!',
                            color: 'success'
                        }

                        $scope.results.push(result);
                        console.log("Success!!");
                    }
                    else
                    {
                        $scope.failure = true;
                        $scope.success = false;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Incorrect!',
                            color: 'danger'
                        }

                        $scope.results.push(result);
                        console.log("Failure!!");
                    }
                    break;
                case 3:
                    var name = $scope.boxes.thirdColor.replace(/ color-box/, "");
                    if ($scope.question.ColorName === name) {
                        $scope.success = true;
                        $scope.failure = false;

                        _Score += 2;
                        $scope.score = _Score;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Correct!',
                            color: 'success'
                        }

                        $scope.results.push(result);
                        console.log("Success!!");
                    }
                    else
                    {
                        $scope.failure = true;
                        $scope.success = false;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Incorrect!',
                            color: 'danger'
                        }

                        $scope.results.push(result);
                        console.log("Failure!!");
                    }
                    break;
                case 4:
                    var name = $scope.boxes.fourthColor.replace(/ color-box/, "");
                    if ($scope.question.ColorName === name) {
                        $scope.success = true;
                        $scope.failure = false;

                        _Score += 2;
                        $scope.score = _Score;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Correct!',
                            color: 'success'
                        }

                        $scope.results.push(result);
                        console.log("Success!!");
                    }
                    else
                    {
                        $scope.failure = true;
                        $scope.success = false;
                        result = {
                            questionNumber: $scope.counter,
                            givenAnswer: name,
                            correctAnswer: $scope.question.ColorName,
                            mark: 'Incorrect!',
                            color: 'danger'
                        }

                        $scope.results.push(result);
                        console.log("Failure!!");
                    }
                    break;
            }
            $timeout(nextQuestion, 3000);
        };

        $scope.quit = quit;
        $scope.nextQuestion = nextQuestion;
        $scope.reload = function () {
            $window.location.reload();
        };

    })//.directive('row', function ($compile) {
    //    return {
    //        restrict: 'E',
    //        link: function (scope, element, attrs) {
    //            element[0].innerHTML = '<input type="text" placeholder="*"/>';
    //            $compile(element.contents())(scope);
    //        }
    //    }
    //});
})();
