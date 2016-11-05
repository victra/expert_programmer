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

//create class react
var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
  <MyComponentClass />, 
  document.getElementById('app')
);

//show variable in class react
var React = require('react');
var ReactDOM = require('react-dom');


var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
var Friend = React.createClass({
  render: function(){
    var friend = friends[0];
    return(
      <div>
        <h1>
          {friend.title}
        </h1>
        <img src={friend.src}/>
      </div>
    )
  }
});

ReactDOM.render(
  <Friend/>,
  document.getElementById('app')
);

//react class with attribut
var React = require('react');
var ReactDOM = require('react-dom');

var MyName = React.createClass({
  // name property goes here:
  name: 'Dark King',
  render: function () {
    return <h1>My name is {this.name}</h1>;
  }
});

ReactDOM.render(<MyName />, document.getElementById('app'));

//show function in react class
var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
});

ReactDOM.render(
  <Button/>,
  document.getElementById('app')
);

//call or import js page in js page
//this is Navbar page page
var React = require('react');

var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});

module.exports = NavBar;
//this is profile page
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.js');

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
});

ReactDOM.render(
  <ProfilePage/>,
  document.getElementById('app')
);

//use attribut in render
var React = require('react');
var ReactDOM = require('react-dom');

var PropsDisplayer = React.createClass({
  render: function () {
    var stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
});

ReactDOM.render(
  <PropsDisplayer myProp="Hello"/>,
  document.getElementById('app')
);

//use attribut in render
var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
});

ReactDOM.render(
  <Greeting firstName='Dark King' />, 
  document.getElementById('app')
);

output:
Hi there, Dark King!

//import page react
//greeting page
var React = require('react');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
});

module.exports = Greeting;
//app page
var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./Greeting');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Dark King"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//function method in react class
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function () {
    return {title: 'Best App'};
  },
  
  render: function () {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
});

//call initial state in render
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function () {
    return {title: 'Best App'};
  },
  
  render: function () {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

//toggle button in react class
var React = require('react');
var ReactDOM = require('react-dom');

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
  getInitialState: function() {
    return {color: green}
  },
  changeColor: function() {
    var newMood = this.state.color == green ? yellow : green;
    this.setState({ color: newMood });
  },
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
          <button onClick={this.changeColor}>
            Change color
          </button>
        </h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Toggle/>,
  document.getElementById('app')
);

//