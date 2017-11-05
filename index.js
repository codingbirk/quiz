angular.module('ngQuiz', ['ngSanitize'])

.controller('ngQuizController', function($scope, $timeout, quizProgress, scoreKeeper) {
  $scope.quizProgress = quizProgress;

  $scope.quizData = {
    "quizMetadata": {
      "title": "Real or Fake?",
      "intro": "Do you know the real scoop on the Loop? It’s time to find out!",
      "introImg": "http://interactive.wttw.com/sites/default/files/styles/small-hero/public/B12_b.jpg",
      "introImgCredit": "Alan Brunettin"
    },
    "quizQuestions": [{
      "question": "Watermelon Oreos",
      "questionImg": "https://cbi-blog.s3.amazonaws.com/blog/wp-content/uploads/2016/07/Watermelon-oreos.jpg",
      "feedback": "Flavored Oreos can be great (golden, birthday cake, reverse, etc.) but these just went too far. This weird flavor combination failed to find a following with consumers. It was only available for a limited time anyway, which is just as well.",
      "options": [{
        "name": "True",
        "correct": true
      }, {
        "name": "False",
        "correct": false
      },
      ]
    }, {
      "question": "Tea cup with a fan",
      "questionImg": "https://media.wired.com/photos/59327337b8eb31692072f9fc/master/w_1000,c_limit/cupandfan.jpg",
      "feedback": "You didnt actually think this was real did you? Do you have the IQ of a cucumber?",
      "options": [{
        "name": "True",
        "correct": false
      }, {
        "name": "False",
        "correct": true
      }]
    }, {
      "question": "Garden Umbrella",
      "questionImg": "https://media.wired.com/photos/5932733626780e6c04d2bd49/master/w_1000,c_limit/plantpotumbrella2.jpg",
      "feedback": "Make use of a rainy day! Stop wasting all that potential waret",

      "options": [{
        "name": "True",
        "correct": false
      }, {
        "name": "False",
        "correct": true
      }]
    }, {
      "question": "The Colour Picker Pen",
      "questionImg": "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/1/30/15/enhanced-buzz-20305-1359578845-0.jpg?downsize=715:*&output-format=auto&output-quality=auto",
      "feedback": "Of course this isnt real...what do you think this is, IronMan?",
      "options": [{
        "name": "True",
        "correct": false
      }, {
        "name": "False",
        "correct": true
      }]
    }, {
      "question": "Cheetos lip Balm",
      "questionImg": "https://cbi-blog.s3.amazonaws.com/blog/wp-content/uploads/2016/07/Cheetos-lip-balm.jpg",
      "feedback": "Getting Cheeto dust all over your lips (and fingers, and keyboard, and literally everything else) is easily the worst part of eating Cheetos, so the idea of purposefully smearing your lips with something Cheeto-scented/flavored clearly didn’t appeal to many.",
      "options": [{
        "name": "True",
        "correct": true
      }, {
        "name": "False",
        "correct": false
      }]
    }, {
      "question": "Harley Davidson Cologne",
      "questionImg": "https://lh4.googleusercontent.com/c0chnInrcVv6XI05FCQvux0ras3cNYc5YEmnB4VJeo65BRM-K5I637U9Bl4esev7DkcHM1_ozD2h4T0lYDMs16uNtOAU-DHoP3ljRyiVwn19JiZgMFivupSPBfbETWODUO93bziB",
      "feedback": "Harley Davidson cologne shows that not just tech and fast food companies can overextend themselves with an off-the-wall product. Whatever smells one might associate with the venerable motorcycle company, even the most committed biker was likely not clamoring for a branded cologne. Especially not one with the slogan, “The scent of freedom,” and which, according to one description, possessed “Top notes [of] bergamot and mint … [and a base of] patchouli and sandalwood.”",
      "options": [{
        "name": "True",
        "correct": true
      }, {
        "name": "False",
        "correct": false
      }]
    }, {
      "question": "The Node Outlet",
      "questionImg": "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/1/30/17/enhanced-buzz-orig-13358-1359583318-6.jpg?downsize=715:*&output-format=auto&output-quality=auto",
      "feedback": "If I had to pick between you and a brick wall to be on my trivia team... I would chose the brick wall",
      "options": [{
        "name": "True",
        "correct": false
      }, {
        "name": "False",
        "correct": true
      }]
    }, {
      "question": "Trump Steakes",
      "questionImg": "https://cbi-blog.s3.amazonaws.com/blog/wp-content/uploads/2016/07/Trump-Steaks.jpg",
      "feedback": "This vainglorious effort was tied to The Sharper Image, their sole retailer, a place no one associated with meat.",
      "options": [{
        "name": "True",
        "correct": true
      }, {
        "name": "False",
        "correct": false
      }]
    }, {
      "question": "Bonnet hair dryer",
      "questionImg": "https://static.interestingengineering.com/images/import/2016/05/bonnet-hair-dryer.jpg",
      "feedback": "So, this invention didn't technically fail as Amazon still sells a model of it for US$24.99, but it sums up invention craze in the 1950s. Everyone was obsessed with coming up with the best ways to speed up daily lives, or maybe just make them feel like they were living in the future.",
      "options": [{
        "name": "True",
        "correct": true
      }, {
        "name": "False",
        "correct": false
      }]
    }, {
      "question": "Before the advent of the steel frame skeleton, early skyscrapers were supported by:",
      "questionImg": "http://interactive.wttw.com/sites/default/files/styles/hero/public/Q10.jpg",
      "feedback": "In early tall buildings, such as the Monadnock building (shown here), the masonry was “load bearing.” That means the massive granite base of the Monadnock actually supported the full weight of the building’s 16-story walls. It was possibly the tallest skyscraper constructed in this manner, inspiring wonder at the time it was built.<br/><br/>Masonry construction as seen in the Monadnock had its limitations and problems, including extensive settling of the weight into Chicago’s clay soils. Later buildings benefited from the innovative use of steel-frame construction, which allowed for more height without the need for a hulking stone foundation at street level.",
      "options": [{
        "name": "Massive wooden piers",
        "correct": false
      }, {
        "name": "Load-bearing, exterior masonry walls",
        "correct": true
      }, {
        "name": "Neoclassical columns",
        "correct": false
      }]
    }]
  };

  $scope.quizQuestions = $scope.quizData.quizQuestions;
  $scope.quizMetadata = $scope.quizData.quizMetadata;
  quizProgress.lastQuestion = $scope.quizQuestions.length;
  quizProgress.loading = false;

  $scope.startQuiz = function() {
    quizProgress.inProgress = true;
    quizProgress.currentQuestion = 0;
    quizProgress.imageToPreload = 1;
  };

  $scope.nextQuestion = function() {
    if (quizProgress.currentQuestion < quizProgress.lastQuestion) {
      quizProgress.currentQuestion = quizProgress.currentQuestion + 1;
      quizProgress.currentQuestionFriendly = quizProgress.currentQuestionFriendly + 1;
      quizProgress.imageToPreload = quizProgress.imageToPreload + 1;
    }
  };

  $scope.answerQuestion = function(data) {
    $scope.quizQuestions[quizProgress.currentQuestion].answered = true;
    angular.forEach($scope.quizQuestions[quizProgress.currentQuestion].options, function(obj) {
      if (obj.name === data.selected) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
    });
  };

  $scope.checkAnswer = function() {
    $scope.quizQuestions[quizProgress.currentQuestion].answerChecked = true;

    angular.forEach($scope.quizQuestions[quizProgress.currentQuestion].options, function(obj) {
      if (obj.selected) {
        if (obj.correct) {
          $scope.quizQuestions[quizProgress.currentQuestion].answerWasRight = true;
        } else {
          $scope.quizQuestions[quizProgress.currentQuestion].answerWasRight = false;
        }
      }
    });
  };

  $scope.getScore = function() {
    quizProgress.inProgress = false;
    quizProgress.finished = true;
    quizProgress.calculatingScore = true;
    $scope.score = scoreKeeper.calculateScore($scope.quizQuestions);

    $timeout(function() {
      quizProgress.calculatingScore = false;
    }, 1500);
  };

  $scope.startOver = function() {
    angular.forEach($scope.quizQuestions, function(obj) {
      obj.answered = false;
      obj.answerWasRight = false;
      obj.answerChecked = false;

      angular.forEach(obj.options, function(option) {
        option.selected = false;
      });
    });

    quizProgress.inProgress = true;
    quizProgress.finished = false;
    quizProgress.currentQuestion = 0;
    quizProgress.currentQuestionFriendly = 1;
  };
})

.factory('quizProgress', function() {
  return {
    currentQuestion: 0,
    imageToPreload: 0,
    currentQuestionFriendly: 1,
    lastQuestion: 0,
    loading: true,
    inProgress: false,
    finished: false,
    calculatingScore: false
  };
})

.service('scoreKeeper', function() {
  this.calculateScore = function(quizQuestions) {
    var rightAnswers = 0;
    angular.forEach(quizQuestions, function(obj) {
      if (obj.answerWasRight) {
        rightAnswers += 1;
      }
    });

    return ((rightAnswers / quizQuestions.length) * 100).toFixed() + '%';
  };
})

.directive('progressBar', function(quizProgress) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('quizProgress', function(newVal, oldVal) {
        if (newVal) {
          element.css('width', ((quizProgress.currentQuestionFriendly / quizProgress.lastQuestion) * 100 + '%'));
        }
      }, true);
    }
  };
})

.directive('imagePreload', function(quizProgress) {
  return {
    restrict: 'EA',
    template: "<img style='display:none;' ng-src='{{quizQuestions[quizProgress.imageToPreload].questionImg}}'/>"
  };
})

.directive('animateProgression', function(quizProgress, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('quizProgress.currentQuestion', function(newVal, oldVal) {
        if (newVal) {
          element.addClass('question-animate');
          $timeout(function() {
            element.removeClass('question-animate');
          }, 1500);
        }
      });
    }
  };
});