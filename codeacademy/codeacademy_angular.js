//html
<!doctype html>
<html>
  <head>
      <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div class="header">
      <div class="container">
        <h1>Book End</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">

        <h1>{{title}}</h1>

      </div>
    </div>

    <div class="footer">
      <div class="container">
        <h2>Available for iPhone and Android.</h2>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png" width="120px" />
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png" width="110px" />
      </div>
    </div>


    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

  </body>
</html>

//app.js
var app = angular.module("myApp", []);

//main controller
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
}]);

//html repeat
<!doctype html>
<html>
  <head>
      <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div class="header">
      <div class="container">
        <h1>Book End</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">

        <h1>{{ title }}</h1>
        <h2>{{ promo }}</h2>

       <div ng-repeat="product in products" class="col-md-6"> 
          <div class="thumbnail"> 
            <img ng-src="{{ product.cover }}"> 
            <p class="title">{{ product.name }}</p> 
            <p class="price">{{ product.price | currency }}</p> 
            <p class="date">{{ product.pubdate | date }}</p> 
          </div> 
        </div>

      </div>
    </div>

    <div class="footer">
      <div class="container">
        <h2>Available for iPhone and Android.</h2>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png" width="120px" />
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png" width="110px" />
      </div>
    </div>


    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
  </body>
</html>

//main controller.js
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Dark World'; 
  $scope.promo = 'Yahoo';
  $scope.products = [{
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg'
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' 
  }]
}]);

//app.js
var app = angular.module("myApp", []);

//add function on click
<!doctype html>
<html>
  <head>
      <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div class="header">
      <div class="container">
        <h1>Book End</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">

        <h1>{{ title }}</h1>
        <h2>{{ promo }}</h2>

       <div ng-repeat="product in products" class="col-md-6"> 
          <div class="thumbnail"> 
            <img ng-src="{{ product.cover }}"> 
            <p class="title">{{ product.name }}</p> 
            <p class="price">{{ product.price | currency }}</p> 
            <p class="date">{{ product.pubdate | date }}</p> 
            <div class="rating"> 
              <p class="likes" ng-click="plusOne($index)">+ {{product.likes}}</p> 
            </div>
          </div> 
        </div>

      </div>
    </div>

    <div class="footer">
      <div class="container">
        <h2>Available for iPhone and Android.</h2>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png" width="120px" />
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png" width="110px" />
      </div>
    </div>


    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
  </body>
</html>

//MainController.js
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Dark World'; 
  $scope.promo = 'Yahoo';
  $scope.products = [{
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg',
    likes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0 
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0 
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0 
  }];
  $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };
}]);

//include other page
//html
<!doctype html>
<html>
  <head>
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="AppMarketApp">
    <div class="header">
      <div class="container">
        <h1>App Market</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">
         <div class="card">
           <app-info info="move"></app-info> 
          <img class="icon" ng-src="{{ move.icon }}">
          <h2 class="title">{{ move.title }}</h2>
          <p class="developer">{{ move.developer }}</p>
          <p class="price">{{ move.price | currency }}</p>
        </div>

        <div class="card">
          <app-info info="shutterbugg"></app-info>
          <img class="icon" ng-src="{{ shutterbugg.icon }}">
          <h2 class="title">{{ shutterbugg.title }}</h2>
          <p class="developer">{{ shutterbugg.developer }}</p>
          <p class="price">{{ shutterbugg.price | currency }}</p>
        </div>

        <div class="card">
          <app-info info="gameboard"></app-info>
          <img class="icon" ng-src="{{ gameboard.icon }}">
          <h2 class="title">{{ gameboard.title }}</h2>
          <p class="developer">{{ gameboard.developer }}</p>
          <p class="price">{{ gameboard.price | currency }}</p>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

    <!-- Directives -->
		<script src="js/directives/appInfo.js"></script>

  </body>
</html>

//MainController.js
app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };
}]);

//appInfo.js
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});

//appInfo.heml
<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p>

//------------------ Directives -------------------------
//index.html
<!doctype html>
<html>
  <head>
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="AppMarketApp">
    <div class="header">
      <div class="container">
        <h1>App Market</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">
         <div class="card" ng-repeat="app in apps">
          <app-info info="app"></app-info>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

    <!-- Directives -->
    <script src="js/directives/appInfo.js"></script>


  </body>
</html>

//MainController.js
app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
    { 
      icon: 'img/move.jpg', 
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'img/shutterbugg.jpg', 
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99 
    },
    {
      icon: 'img/gameboard.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {
      icon: 'img/forecast.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
  ];
}]);

//appInfo.js
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});

//can write this
<!doctype html>
<html>
  <head>
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="AppMarketApp">
    <div class="header">
      <div class="container">
        <h1>App Market</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">
         <div class="card" ng-repeat="app in apps">
          <app-info info="app"></app-info>
          <install-app></install-app>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

    <!-- Directives -->
    <script src="js/directives/appInfo.js"></script>
    <script src="js/directives/installApp.js"></script>

  </body>
</html>

app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/installApp.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    },
  };
});
//---can write this---

//appInfo.html
<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p>


//--------------------- Service ----------------------
url: https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json
//forecast.js
app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

//html
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />
    
    <!-- Include the AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="ForecastApp">

    <div class="main" ng-controller="MainController">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-sm-offset-7">
            <h1>{{ fiveDay.city_name }}</h1>
            <h2>5-day forecast</h2>
            <div class="forecast" ng-repeat="day in fiveDay.days">
              <div class="day row">
                <div class="weekday col-md-4">
                  <p>{{ day.datetime | date }}</p>
                </div>
                <div class="weather col-md-3">
                  <img ng-src="{{ day.icon }}">
                </div>
                <div class="weather col-md-1">
                </div>
                <div class="high col-md-2">
                  <p>{{ day.high }}&deg;</p>
                </div>
                <div class="low col-md-2">
                  <p>{{ day.low }}&deg;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

    <!-- Services -->
    <script src="js/services/forecast.js"></script>

    <!-- Directives -->


  </body>
</html>

//MainController.js
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) { 
    $scope.fiveDay = data; 
  });
  
}]);

//--------------------- Routing ----------------------
//app.js
var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

//index.html
<!doctype html>
<html>
  <head>
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,300' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the core AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>

    <!-- Include the AngularJS routing library -->
    <script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>
  </head>
  <body ng-app="GalleryApp">

    <div class="header">
      <div class="container">
        <a href="/#/">
          <img src="img/logo.svg" width="80" height="80"> &#12501; &#65387; &#12488; &#12501; &#65387; &#12488;
        </a>
      </div>
    </div>

    <div ng-view></div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/HomeController.js"></script>
    <script src="js/controllers/PhotoController.js"></script>

    <!-- Services -->
    <script src="js/services/photos.js"></script>

  </body>
</html>

// add route
// app.js
var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/photos/:id', { 
      controller: 'PhotoController', 
      templateUrl: 'views/photo.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

//index.html
<!doctype html>
<html>
  <head>
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,300' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <!-- Include the core AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>

    <!-- Include the AngularJS routing library -->
    <script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>
  </head>
  <body ng-app="GalleryApp">

    <div class="header">
      <div class="container">
        <a href="/#/">
          <img src="img/logo.svg" width="80" height="80"> &#12501; &#65387; &#12488; &#12501; &#65387; &#12488;
        </a>
      </div>
    </div>

    <div ng-view></div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/HomeController.js"></script>
    <script src="js/controllers/PhotoController.js"></script>

    <!-- Services -->
    <script src="js/services/photos.js"></script>

  </body>
</html>

//photo.html
<div class="photo">
  <div class="container">
    <img ng-src="{{ detail.url }}">
    <h2 class="photo-title"> </h2>
    <p class="photo-author"> </p>
    <p class="photo-views">{{ detail.views | number}}</p>
    <p class="photo-upvotes">{{ detail.upvotes | number}}</p>
    <p class="photo-pubdate">{{ detail.pubdate | date}}</p>
  </div>
</div>

//PhotoController.js
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);

//services/photo.js
app.factory('photos', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

