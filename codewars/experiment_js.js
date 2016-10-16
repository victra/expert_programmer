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

//