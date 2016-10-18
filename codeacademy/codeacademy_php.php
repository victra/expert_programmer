

===> tag php
<?php ?>

<?php

//===> comment one line
// content comment

//===> comment multi line
/*  
	content comment
	content comment
*/

//===> show string
echo "content string";

//===> show integer
echo 21;

//===> show variabel
echo $variabel;

//===> mix variabel and string
echo "test ".$variabel." test2";

//===> array(see whatis)

//===> show array element
$array1 = array('a', 'b', 'c', 'd');
echo $array1[2]
output:
c

//////////
// LOOP //
//////////
//===> for
for ($i = 2; $i < 11; $i = $i + 2) {
  echo $i;
}
output:
246810

//===> foreach
$sentence = array("Im ", "learning ", "PHP!");        
foreach($sentence as $word) {
  echo $word;
}
output:
Im learning PHP!

//===> while
$loopCond = true;
while ($loopCond){
	echo "<p>The loop is running.<p>";
	$loopCond = false;
}
output:
The loop is running.
//other example
$i=0;
while($i<5){
    echo $i;
    $i++;
}
output:
01234
//with other way
$i=0;
while($i<5):
    echo $i;
    $i++;
endwhile;
output:
01234

//===> do while
$loopCond = false;
do {
	echo "<p>The loop ran even though the loop condition is false.</p>";
} while ($loopCond);
output:
The loop ran even though the loop condition is false.

//////////////
// function //
//////////////
//===> length
$length = strlen("sayah");
echo $length;
output:
5

//===> partial, uppercase, lowercase
$myname = "Dark King";

$partial = substr($myname, 1, 3);
print $partial;

$uppercase = strtoupper($myname);
print $uppercase;

$lowercase = strtolower($myname);
print $lowercase;

output:
ark

DARK KING

dark king

//===> find position
$myname = "Dark King";
echo strpos($myname, "i");
output:
6

//===> round(pembulatan)
$round = round(M_PI);
print $round;

$round = round(M_PI, 3);
print $round;
output:
3

3.142

//===> rand(random number between)
 print rand(1, 10);

$name = "Dark King";
echo $name[rand(0, strlen($name)-1)];
output:
4

n

//===> array push
$apalah = array();
array_push($apalah, "hallo");
array_push($apalah, "aloha");
array_push($apalah, "hai");
array_push($apalah, "hoii");
array_push($apalah, "yaaa!");
print count($apalah);
output:
5

//===> array sort, reverse, join
$the_array = array("asd", "sdas", "dsa", "qwerq");
sort($the_array);
print join(",",$the_array);

rsort($the_array);
print join("::", $the_array);
output:
asd,dsa,qwerq,sdas

sdas::qwerq::dsa::asd

//===> length string
$name = "Dark King";
echo strlen($name);
output:
9

//===> play with function
function greetings($name){
    echo "Greetings, " . $name . "!";
}

greetings("Dark King");
output:
Greetings, Dark King!

//===> class
// The code below creates the class
class Person {
    // Creating some properties (variables tied to an object)
    public $isAlive = true;
    public $firstname;
    public $lastname;
    public $age;
    
    // Assigning the values
    public function __construct($firstname, $lastname, $age) {
      $this->firstname = $firstname;
      $this->lastname = $lastname;
      $this->age = $age;
    }
    
    // Creating a method (function tied to an object)
    public function greet() {
      return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)";
    }
  }
  
// Creating a new person called "boring 12345", who is 12345 years old ;-)
$me = new Person('Dark', 'King', 12345);

// Printing out, what the greet method returns
echo $me->greet(); 
output:
Hello, my name is Dark King Nice to meet you!

//===> other example class
class Dog{
    public $numLegs = 4;
    public $name;
    
    public function __construct($name){
        $this->name = $name;    
    }
    
    public function bark(){
        return "Woof!";   
    }
    
    public function greet(){
        return "My name is ".$this->name;    
    }
}

$dog1 = new Dog("Barker");
$dog2 = new Dog("Amigo");

echo $dog1->bark();
echo $dog2->greet();
output:
Woof! My name is Amigo

//===> cheking class
class Person {
  public $isAlive = true;
  
  function __construct($name) {
      $this->name = $name;
  }
  
  public function dance() {
    return "I'm dancing!";
  }
}

$me = new Person("Shane");
if (is_a($me, "Person")) {
  echo "I'm a person, ";
}
if (property_exists($me, "name")) {
  echo "I have a name, ";
}
if (method_exists($me, "dance")) {
  echo "and I know how to dance!";
}
output:
I m a person, I have a name, and I know how to dance!

//===>

?>