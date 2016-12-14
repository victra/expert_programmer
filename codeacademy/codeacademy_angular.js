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

