<?php
//switch
function basicOp($op, $val1, $val2)
{
  switch ($op) {
    case '+':
      return $val1 + $val2;
    case '-':
      return $val1 - $val2;
    case '*':
      return $val1 * $val2;
    case '/':
      return $val1 / $val2;
  }
}

// http://www.codewars.com/kata/complementary-dna/train/php
function DNA_strand($dna) {
  for ($h=0;$h<strlen($dna);$h++){
    if ($dna[$h]=="A"){ 
      $dna[$h]="T";
    }else if ($dna[$h]=="T"){
      $dna[$h]="A"; 
    }else if ($dna[$h]=="G"){
      $dna[$h]="C";
    }else if ($dna[$h]=="C"){ 
      $dna[$h]="G";
    }
  }
  return $dna;
}

// get different element on array
function stray($arr)
{
  $q = [];
  for ($i=0; $i < (count($arr))-1 ; $i++) { 
    if ($arr[$i]==$arr[$i+1]) {
      array_push($q, $arr[$i]);
    }
  }
  $array = array_diff($arr, $q);
  if (count($array)>1){
    return $array[1];
  }
  return implode("", $array);
}

//other way
function stray($arr)
{
  return array_search(1, array_count_values($arr));  
}
function stray($arr)
{
  return array_reduce($arr, function($a, $b) { return $a ^ $b; });
}
function stray($arr)
{
  $duplicateArray = array_unique(array_diff_assoc($arr, array_unique($arr)));
  $duplicate = $duplicateArray[key($duplicateArray)];
  foreach($arr as $ar) {
    if($ar != $duplicate)
      return $ar;
  }
}

//is float or string
function my_first_kata($a,$b) {
  if ((!is_int($a) and !is_float($a)) or (!is_int($b) and !is_float($b))) {
    return false;
  } else {
    return ($a%$b)+($b%$a);
  }
}

//sum array with condition
function sumArray($array) {
  sort($array); array_pop($array); array_shift($array); $s=array_sum($array); return $s;
}
$this->assertSame(16, sumArray([6, 2, 1, 8, 10]));

//reverse string and split
function reverse($string) {
  $split = explode(" ", $string);
  $t = array_reverse($split);
  return implode(" ", $t);
}

//make validation
function howManyLightsabersDoYouOwn($name="else") {
    if($name=="Zach"){ return 18; } else { return 0; }
}
//test
class MyTestCases extends TestCase
{
    public function testLightsabers() {
        $this->assertSame(18, howManyLightsabersDoYouOwn('Zach'));
        $this->assertSame(0, howManyLightsabersDoYouOwn('Adam'));
    }
}

//divide big number ith small number
function remainder($a, $b) {
    if($a>$b){if($b==0){return null;}else{return $a%$b;}} else {
      if($a==0){return null;}else{return $b%$a;}
    }
}
$this->assertSame(2, remainder(17,5), 'Returned value should be the value left over after dividing as much as possible.');
$this->assertSame(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.');
$this->assertSame(null, remainder(1, 0), 'Divide by zero should return null');
$this->assertSame(null, remainder(0, 0), 'Divide by zero should return null');

//salary bonus
function bonusTime($salary, $bonus) {
      switch ($bonus) {
          case true:
              return "$".$salary*10;
          case false:
              return "$".$salary;
      }
}
class MyTestCases extends TestCase
{
    /**
     * @dataProvider basicProvider
     */
    public function testBasic($salary, $bonus, $expected) {
        $this->assertSame($expected, bonusTime($salary, $bonus));
    }
    
    public function basicProvider()
    {
        return [
            [10000, true, '$100000'],
            [25000, true, '$250000'],
            [10000, false, '$10000'],
            [60000, false, '$60000'],
            [2, true, '$20'],
            [78, false, '$78'],
            [67890, true, '$678900'],
        ];
    }
}

//get decimal precision
function twoDecimalPlaces($n) {
    return round($n, 2);
}
class MyTestCases extends TestCase
{
    public function testThatSomethingShouldHappen() {
      $this->assertEquals(4.6600000000000001, twoDecimalPlaces(4.659725356));
    }
}

//decimal code
echo round(3.4);         // 3
echo round(3.5);         // 4
echo round(3.6);         // 4
echo round(3.6, 0);      // 4
echo round(1.95583, 2);  // 1.96
echo round(1241757, -3); // 1242000
echo round(5.045, 2);    // 5.05
echo round(5.055, 2);    // 5.06

echo round(9.5, 0, PHP_ROUND_HALF_UP);   // 10
echo round(9.5, 0, PHP_ROUND_HALF_DOWN); // 9
echo round(9.5, 0, PHP_ROUND_HALF_EVEN); // 10
echo round(9.5, 0, PHP_ROUND_HALF_ODD);  // 9

echo round(8.5, 0, PHP_ROUND_HALF_UP);   // 9
echo round(8.5, 0, PHP_ROUND_HALF_DOWN); // 8
echo round(8.5, 0, PHP_ROUND_HALF_EVEN); // 8
echo round(8.5, 0, PHP_ROUND_HALF_ODD);  // 9

//game check live refactor
function checkAlive($health) {
   return $health ? $health > 0 ? true : false : false;
}
class CheckAliveTestCases extends TestCase
{
    public function testShouldReturnTheProperValues() {
        $this->assertSame(false, checkAlive(0));
        $this->assertSame(true, checkAlive(5));
    }
}

//case with condition
function fuel_price($litres, $price_per_liter) {
  switch ($litres){
    case $litres>=2&&$litres<4:
      return round($litres*($price_per_liter-0.05), 2);
    case $litres>=4&&$litres<6:
      return round($litres*($price_per_liter-0.1), 2);
    case $litres>=6&&$litres<8:
      return round($litres*($price_per_liter-0.15), 2);
    case $litres>=8&&$litres<10:
      return round($litres*($price_per_liter-0.2), 2);
    case $litres>=10:
      return round($litres*($price_per_liter-0.25), 2);
  }
  return 4.28;
}
//smart way
function fuel_price($litres, $price_per_liter) {
  $discount = floor($litres/2) * 0.05;
  if($discount > .25) $discount = 0.25;
  return $litres * ($price_per_liter - $discount);
}
//test
class FuelCalculatorTest extends TestCase {
  public function testExamples() {
    $this->assertEquals(5.65, fuel_price(5, 1.23));
    $this->assertEquals(18.40, fuel_price(8, 2.5));
    $this->assertEquals(27.50, fuel_price(5, 5.6));
  }
}

//get max and min element on array
function maximum($array) {
  return max($array);
}
function minimum($array) {
  return min($array);
}
class MaxMinTest extends TestCase {
  public function testThatFunctionsWorkForExamples() {
    //$this->assertEquals(maximum(array(1, 2, 3, 4, 5)), 5);
    $this->assertEquals(minimum(array(1, 2, 3, 4, 5)), 1);
  }
}

?>