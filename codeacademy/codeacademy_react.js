//you can mix html and js
var title = <h1>test</h1>

//write html attribut on js
var p1 = <p id="large">foo</p>;
var p2 = <p id="small">bar</p>;

//write with many tag
var myDiv = (
  <div>
  	<h1>Hello world</h1>
  </div>
);

//create page on html
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
output:
Hello world
//html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="/styles.css">
		<title>Learn ReactJS</title>
	</head>

	<body>
	  <main id="app"></main>
		<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
	  <script src="/app.compiled.js"></script>
	</body>
</html>

//display var
var React = require('react');
var ReactDOM = require('react-dom');

var myList = (
	<ul>
  	<li>test1</li>
    <li>test2</li>
  </ul>
);

ReactDOM.render(
	myList,
  document.getElementById('app')
);

//jsx is use slash to self-closing tags
<img src="images/jenkins.png" />
<br />

//different html and js
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);
output:
2 + 3 // not 5 because that is html
//but what about this?
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
output:
5

//show(echo) variable on react
var theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
output:
tralalalala i am da best

//use symbol
var pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 
var owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);

//condition
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}
var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
var img = <img src={coinToss() == 'heads' ? pics.kitty : pics.doggy } />;
//other way
//var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;
ReactDOM.render(
	img, 
	document.getElementById('app')
);

//use operator &&
var judgmental = Math.random() < 0.5;
var favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);
ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
desc:
&& works best in conditionals that will sometimes do an action, but other times do nothing at all.

//show each
var people = ['Rowe', 'Prevost', 'Gare'];
var peopleLIs = people.map(function(person){
  return <li>{person}</li>;
});
//add key use this
// var peopleLIs = people.map(function(person, i){
//   return <li key={'person_' + i}>{person}</li>;
// });
ReactDOM.render(
  <ul>{peopleLIs}</ul>,
  document.getElementById('app')
);
output:
Rowe
Prevost
Gare

//write without jsx
var greatestDivEver = <div>i am div</div>;
//can be rewritten without JSX, like this:
var greatestDivEver = React.createElement(
	"div",
  null,
  "i am div"
);

