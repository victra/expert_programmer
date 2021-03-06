// dna replace char
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
function reverseComplement(dna) {
  if (dna.charAt(0)=="A" || dna.charAt(0)=="T" || dna.charAt(0)=="G" || dna.charAt(0)=="C"){
      for (var h = 0; h < dna.length; h++){
        if (dna.charAt(h)=="A"){ 
          dna = dna.replaceAt(h, "T");
        } else if (dna.charAt(h)=="T"){
          dna = dna.replaceAt(h, "A");
        }else if (dna.charAt(h)=="G"){
          dna = dna.replaceAt(h, "C");
        }else if (dna.charAt(h)=="C"){
          dna = dna.replaceAt(h, "G");
        }
      }
    dna=dna.split('').reverse().join('');;
  } else if (!dna){
    dna=dna;
  } else {
    dna="Invalid sequence";
  }
  if (dna){
    for (var h = 0; h < dna.length; h++){
      if (dna.charAt(0)=="Z" || dna.charAt(0)=="R" || dna.charAt(0)=="S" || dna.charAt(0)=="U" || dna.charAt(0)=="X" || dna.charAt(0)=="Y" || dna.charAt(1)=="Z" || dna.charAt(1)=="R" || dna.charAt(1)=="S" || dna.charAt(1)=="U" || dna.charAt(1)=="X" || dna.charAt(1)=="Y" || dna.charAt(2)=="Z" || dna.charAt(2)=="R" || dna.charAt(2)=="S" || dna.charAt(2)=="U" || dna.charAt(2)=="X" || dna.charAt(2)=="Y"){
        dna="Invalid sequence";
      }
    }
  }
  return dna;
}
//other way
function reverseComplement(dna) {
  
  dna = dna.split('').reverse();
  var comp = [];

  for(var i = 0; i<dna.length; i++) {
    if(dna[i] === 'A') {
      comp.push('T');
    } else if(dna[i] === 'C') {
      comp.push('G');
    } else if(dna[i] === 'T') {
      comp.push('A');
    } else if(dna[i] === 'G') {
      comp.push('C');
    } else {
      return 'Invalid sequence';
    }
  }
  return comp.join(''); 
}

const reverseComplement = (dna) => {
  const complimentRef = {A: 'T', T: 'A', C: 'G', G: 'C'}
  const reverseC = dna.split('').reverse().map((n) => {
    return complimentRef[n.toUpperCase()] || 'Invalid sequence'
  })
  return reverseC.indexOf('Invalid sequence') > -1 ? 'Invalid sequence' : reverseC.join('')
}

function reverseComplement(dna) {
  return !/^[actg]*$/i.test(dna)
    ? 'Invalid sequence'
    : dna
      .split('')
      .reverse()
      .map(m => 'aAcCtTgG'['tTgGaAcC'.indexOf(m)])
      .join('');
}

const map = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
const reverseComplement = dna => dna.match(/[^ATGC]/) ? "Invalid sequence" : [...dna.toUpperCase()].reverse().map(c => map[c]).join('');

const reverse = dna => dna.split('').reverse().join('');
const complement = dna => dna.replace(/./g, n => 'CGAT'['GCTA'.indexOf(n)]);
const reverseComplement = dna => /^[CGAT]*$/.test(dna) ? reverse(complement(dna)): 'Invalid sequence';

//unit test
var a = "code";
var b = "wa.rs";
var name = a+b;

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals("codewa.rs", name, "This is just an example of how you can write your own TDD tests");
  });
});

//biner ti integer
const binaryArrayToNumber = arr => {
  var sum = 0;
  if (arr[0]==1){
    sum+=8;
  }
  if(arr[1]==1){
    sum+=4;
  }
  if(arr[2]==1){
    sum+=2;
  }
  if(arr[3]==1){
    sum+=1;
  }
  return sum;
};
//other way(parseInt)
const binaryArrayToNumber = arr => {
  return parseInt(Number(arr.join('')), 2)
};
//other way(reduce)
const binaryArrayToNumber = arr => {
  return arr.reduce((a,b)=>(a<<1|b),0);
};
//test
describe("One's and Zero's", () => {
  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });
});

//convert number to word
function switchItUp(number){
  var arr = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine'];
  return arr[number];
}
//other way
function switchItUp(n){
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}
//test
Test.assertEquals(switchItUp(3),"Three");

//average with floor result
function getAverage(marks){
  var sum = 0;
  for(var i=0;i<marks.length;i++){
    sum = sum+marks[i];
  }
  return Math.floor(sum/marks.length);
}
//test
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

//date
function ageInDays(year, month, day){
  var dateNow = new Date();
  var oneDay = 24*60*60*1000;
  var firstDate = new Date(year,month,day);
  var secondDate = new Date(dateNow.getFullYear(),dateNow.getMonth()+1,dateNow.getDate()-1);
  var sum = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  if(sum<2){
    sum=2
  }
  return 'You are ' + sum + ' days old';
}
//other way
function ageInDays(year, month, day){
  var today = new Date();
  var bday = new Date(year, month-1, day);
  var days = (today-bday)/86400000;
  return "You are " + Math.floor(days) + " days old";
}

//find string on array
function findNeedle(haystack) {
  for(var i=0;i<haystack.length;i++){
    if(haystack[i]=='needle'){return 'found the needle at position '+i}
  }
}
//test
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

//reverse string
function solution(str){
  return str.split('').reverse().join('');
}
//test
Test.expect(solution('world') == 'dlrow')

//sort number with null value
function solution(nums){
  return nums ? nums.sort(function(a, b){return a-b}) : [];
}
//test
describe("Solution", function(){
  it("should test for something", function(){
    Test.expect(solution([1, 2, 10, 50, 5]) == [1,2,5,10,50])
  });
});

//add zero on first element number
function solution(value){
  if(value>9 && value<100){
    return "Value is 000"+value;
  } else if(value>99 && value<1000){
    return "Value is 00"+value;
  } else if(value>999 && value<10000){
    return "Value is 0"+value;
  } else if(value>9999 && value<100000){
    return "Value is 0"+value;
  } else {
    return "Value is 0000"+value;
  }
}
//use slice
function solution(value){
  return "Value is " + ("00000" + value).slice(-5);
}
//test
Test.assertEquals(solution(5),"Value is 00005")

//get char on string with length
function solution(string,limit){
    return string.length<=limit ? string : string.slice(0, limit)+'...'
}
//test
describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals(solution('Testing String',8), "Testing ...", "This is just an example of how you can write your own TDD tests");
  });
});

//integer to string
function feuerFrei(concentration, barrels) {
  if(concentration*barrels < 100){
    return (100-concentration*barrels).toString()+' Stunden mehr Benzin benötigt.';
  } else if (concentration*barrels == 100){
    return 'Perfekt!';
  } else {
    return concentration*barrels - 100;
  }
}
//test
Test.describe("feuerFrei", _ => {
  Test.it("should work for fixed tests", _ => {
    Test.assertEquals(feuerFrei(5,20), "Perfekt!");
    Test.assertEquals(feuerFrei(5,200), 900);
    Test.assertEquals(feuerFrei(3,20), '40 Stunden mehr Benzin benötigt.');
  });
});

//write methode code js other way
String.prototype.ipv4Address=function(){
  return this;
}
//test
Test.describe("Basic tests",_=>{
  Test.assertEquals("".ipv4Address(), false);
});

//check if array contain number or string
String.prototype.ipv4Address=function(){
  var a = this.split(".");
  var h;
  if(a.length<4||a.length>4){return false}
  for(var i=0;i<a.length;i++){
    if(parseInt(a[i])>255){return false}
    if(a[i].length>1&&a[i][0]==0){return false}
    if (typeof parseInt(a[i])==='number' && (parseInt(a[i])%1)===0) {
        for(var j=0;j<a[i].length;j++){
          if(typeof parseInt(a[i][j])==='number' && (parseInt(a[i][j])%1)===0){
            h = true;
          } else {
            return false;
          }
        }
    } else {
        return false;
    }
  }
  return h;
}
//test
Test.describe("Basic tests",_=>{
  Test.assertEquals("".ipv4Address(), false);
  Test.assertEquals("127.0.0.1".ipv4Address(), true);
  Test.assertEquals("0.0.0.0".ipv4Address(), true);
  Test.assertEquals("255.255.255.255".ipv4Address(), true);
  Test.assertEquals("10.20.30.40".ipv4Address(), true);
  Test.assertEquals("10.256.30.40".ipv4Address(), false);
  Test.assertEquals("10.20.030.40".ipv4Address(), false);
  Test.assertEquals("127.0.1".ipv4Address(), false);
  Test.assertEquals("127.0.0.0.1".ipv4Address(), false);
  Test.assertEquals("..255.255".ipv4Address(), false);
  Test.assertEquals("127.0.0.1\n".ipv4Address(), false);
  Test.assertEquals("\n127.0.0.1".ipv4Address(), false);
  Test.assertEquals(" 127.0.0.1".ipv4Address(), false);
  Test.assertEquals("127.0.0.1 ".ipv4Address(), false);
  Test.assertEquals(" 127.0.0.1 ".ipv4Address(), false);
})

// replace element string
function fakeBin(x){
  var a = x.split("");
  for (var i=0; i<a.length;i++){
    if (a[i]<5){a[i]='0'}
    else {a[i]='1'}
  }
  return a.join("");
}
//other way
return x.split('').map(n => n < 5 ? 0 : 1).join('');

//find position of alfabet 
function position(letter){
  var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for(var i=0; i<a.length; i++){
    if(letter==a[i]){return "Position of alphabet: "+(i+1)}
  }
}
//other way
function position(alphabet){
  var letters = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var placed = letters.indexOf(alphabet)
  return "Position of alphabet:" + " " + placed; 
}
//test
Test.assertEquals(position("a"),"Position of alphabet: 1");
Test.assertEquals(position("z"),"Position of alphabet: 26");
Test.assertEquals(position("e"),"Position of alphabet: 5");

//return the total number of smiling faces in the array
function countSmileys(arr) {
  var s = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==':D' || arr[i]==';D' || arr[i]==':~D' || arr[i]==';~D' || arr[i]==':-D' || arr[i]==';-D' || arr[i]==':)' || arr[i]==';)' || arr[i]==':~)' || arr[i]==';~)' || arr[i]==':-)' || arr[i]==';-)'){
      s+=1;
    }
  }
  return s;
}
//other way
function countSmileys(arr) {
  let smiles = 0
  arr.forEach(_ => {
    if (/(:|;)(\-|\~)?(\)|D)/.test(_)) smiles++
  })
  return smiles
}
//test
Test.describe("Basic testing", function() {
  it("", _ => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
    Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
    Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});

//integer to string
function numberToString(num) {
  return num.toString();
}

//other way to write hash in js
function getMax1()
{
  var max = {name: 'Max Headroom'}
  return max;
}
function getMax2()
{
  return {name: 'Max Headroom'};
}

// echo in js like ruby
function sayHello( name, city, state ) {
  var nama = name[2] ? " "+name[2] : "";
  return "Hello, "+name[0]+" "+name[1]+nama+"! Welcome to "+city+", "+state+"!"
}
//other way
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//multiple number with condition genab ganjil
function simpleMultiplication(num){
    return num%2==0 ? num*8 : num*9;
}
//test
Test.describe("Basic Tests", function(){
  Test.assertEquals(simpleMultiplication(2),16,'Should return given argument times eight...')
  Test.assertEquals(simpleMultiplication(1),9,'Should return given argument times nine...')
  Test.assertEquals(simpleMultiplication(8),64,'Should return given argument times eight...')
  Test.assertEquals(simpleMultiplication(4),32,'Should return given argument times eight...')
  Test.assertEquals(simpleMultiplication(5),45,'Should return given argument times nine...')
});

//return round
function roundToFive(numbers){
  return numbers.map(n => Math.round(n/5)*5);
}
//test
describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals(roundToFive([34.5, 56.2, 11, 13]), [35, 55, 10, 15], "This is just an example of how you can write your own TDD tests");
  });
});

//reverse array
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}
//test
describe("reverseWords",function(){
  it("should work for some examples", function(){
    Test.assertEquals(reverseWords("hello world!"), "world! hello")
    Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
    Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
    Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
  });
});

//write variable in string
function joinStrings(string1, string2){
   return `${string1} ${string2}`;
}
//test
  Test.assertEquals(joinStrings('string1', 'string2'), 'string1 string2');
  Test.assertEquals(joinStrings('testing', 'testing'), 'testing testing');
  Test.assertEquals(joinStrings(134, 234), '134 234');

//math integer to float 2 digit
function discoverOriginalPrice(discountedPrice, salePercentage){
  var a = (((discountedPrice*100)/(100-salePercentage)).toFixed(2)).split('.');
  var i = Math.round((discountedPrice*100)/(100-salePercentage));
  if(a[1]==00){
    return i
  }
  return parseFloat(((discountedPrice*100)/(100-salePercentage)).toFixed(2));
}
//other way
function discoverOriginalPrice(discountedPrice, salePercentage){
  return Math.round(discountedPrice / (1 - salePercentage / 100) * 100) / 100;
}
//test
Test.assertEquals(discoverOriginalPrice(75,25),100);
Test.assertEquals(discoverOriginalPrice(25,75),100);
Test.assertEquals(discoverOriginalPrice(75.75,25),101);

//arrap push
function mergeArrays(a, b) {
  var l = a.length<b.length ? b.length : a.length;
  var s = [];
  for(var i=0; i<l; i++){
    if(a[i]){s.push(a[i])}
    if(b[i]){s.push(b[i])}
  }
  return s;
}
//test
Test.describe('Static Tests', function () {
  Test.it('Passes if arrays are equals', function () {
    Test.assertSimilar(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
    Test.assertSimilar(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
    Test.assertSimilar(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
    Test.assertSimilar(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
    });
});

//average array
function find_average(array) {
  var l = array.length;
  var s = 0;
  for(i=0;i<l;i++){
    s+=array[i];
  }
  return s/l;
}
Test.assertEquals(find_average([1,1,1]), 1);
Test.assertEquals(find_average([1,2,3]), 2);

function find_average(array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}

//  