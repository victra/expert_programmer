//////////////////
// introduction //
//////////////////
//write variable string
var name = 'Dark King';
console.log("Name: " + myString);
output:
"Name: Dark King"

//write number
console.log(3.5);
console.log(2016-1969);
console.log(65/240);
console.log((65/240)*100);
output:
3.5
47
0.2708333333333333
27.083333333333332

//random number and floor(integer that not decimal) that
console.log(Math.floor(Math.random()*100))
output:
17

//put comment
//test thit is comment in single line
/*
	test
	this is comment in multi line
*/

//you can display variable like this
var strength = '50,000 pounds';
console.log('How much stuff can a variable hold? ', strength);
output:
How much stuff can a variable hold?  50,000 pounds

//replaca variable
var morningAlarm = '6:30AM';
morningAlarm = '3:30AM';
console.log('test alarm: ', morningAlarm);
output:
test alarm: 3:30AM

///////////////
// condition //
///////////////
//if else write petik
var test = true;
if(test){
  console.log('Mischief managed.');
} else {
  console.log('I lead a muggle\'s life.');
}
output:
Mischief managed.

//check value
var test = 'full';
if(test=='full'){
  console.log('test true');
} else {
  console.log('test false');
}
output:
test true

//if else if else or(||) and(&&)
var moonPhase = 'solar eclipse';
var test = true;
if(moonPhase==='full' || test){
  console.log('Howwwwlll!!');
} else if(moonPhase==='mostly full') {
  console.log('Arms and legs are getting hairier');
} else if(moonPhase==='mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
output:
Invalid moon phase

//case
var moonPhase = 'full';
switch(moonPhase){
  case 'full':
  	console.log('Howwwwlll!!');
    break;
  case 'mostly full':
  	console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
  	console.log('Back on two feet');
    break;
  default:
  	console.log('Invalid moon phase');
    break;
}
output:
Howwwwlll!!

//////////////
// fucntion //
//////////////
//function and call it
function takeOrder()
{
  console.log('Order: pizza');
}
takeOrder();
output:
Order: pizza

//function with param
function takeOrder(topping)
{
  console.log('Order: pizza topped with '+topping+' inside');
}
takeOrder('bacon');
output:
Order: pizza topped with bacon

//other way call function
var myApartment = function() {
  var mailBoxNumber = 'Box 3';
  var laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
};
myApartment();
output:
Mail box: Box 3, Laundry:In-unit

///////////
// array //
///////////
//write array and element
var bucketList = ['one', 'two', 'three'];
var listItem = bucketList[2];
console.log(bucketList);
console.log(listItem);
console.log(bucketList.length)
output:
[ 'one', 'two', 'three' ]
three
3

//add element of array
var bucketList = ['one', 'two', 'three'];
bucketList.push('four', 'five');
console.log(bucketList);
output:
[ 'one', 'two', 'three', 'four', 'five' ]

//delete last element of array
bucketList.pop();

//////////
// Loop //
//////////
//for
var vacationSpots = ['Bali', 'New York', 'Dubai'];
for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
output:
I would love to visit Bali
I would love to visit New York
I would love to visit Dubai

////////////
// jQuery //
////////////
//hide and fadeIn
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
}
$(document).ready(main); //will runing function main() if page ready	

//you can use toggle to display and hide some class
$('.projects').hide();
$('.projects-button').on('click', function() {
	$('.projects').toggle(); //show and hide
	$('.projects-button').toggleClass('active'); //show and hide class
});

//use this
$('.projects').hide();
$('.projects-button').on('click', function() {
	$(this).next().toggle();
    $(this).toggleClass('active');
});

//animated with slide show and hide
$('.projects').hide();
$('.projects-button').on('click', function() {
	$(this).next().slideToggle(400);
    $(this).toggleClass('active');
});

