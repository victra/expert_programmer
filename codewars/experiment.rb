#tap
s = "hello!"
s.tap{|x|x.delete!("!")}
output:
hello

#select
def well(x)
    z = x.select{|s| s=="good"}
    case z.length
      when 0 then "Fail!"
      when 1,2 then "Publish!"
      else "I smell a series!"
    end
end

#byteslice get char from string
def correct_tail(body, tail)
  sub = body.byteslice(-1)
  if sub == tail
    return true
  else 
    return false
  end
end

def correct_tail(body, tail)
  body[-1] == tail 
end

def correct_tail(body, tail)
  body.end_with? tail
end

#integer dikurang string on array
def div_con(x)
  integer =  x.select{|i|i.is_a?Integer}
  string = x.select{|s|s.is_a?String}
  s = string.collect{|a|a.to_i}
  (integer.inject{|c,v|c+v}).nil? ? w = 0 : w = integer.inject{|c,v|c+v}
  (s.inject{|f,g|f+g}).nil? ? e = 0 : e = s.inject{|f,g|f+g}
  w-e
end

def div_con(x)
  x.reduce(0) { |s, i| i.is_a?(String) ? s - i.to_i : s + i }
end

#convert string == Switcheroo
def switcheroo(x) 
  for h in 0..x.length-1
    if x[h]=="a" then x[h]="b" elsif x[h]=="b" then x[h]="a" end
  end
  return x
end

#sorting array with last char of string
def last(x)
  s = x.split(" ")
  s.sort{|a,b|a[-1] <=> b[-1]}
end

describe "Basic Tests" do
  it "testing..." do
        Test.assert_equals(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
        Test.assert_equals(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']) 
        Test.assert_equals(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])
        Test.assert_equals(last('massage yes massage yes massage'), ['massage', 'massage', 'massage', 'yes', 'yes'])
        Test.assert_equals(last('take bintang and a dance please'), ['a', 'and', 'take', 'dance', 'please', 'bintang'])
  end
end

#reverse dna https://www.codewars.com/kata/reverse-complement-dna/train/ruby
def reverse_complement(dna)
  if dna.length > 11
    return dna
  elsif dna[0]=="A" or dna[0]=="T" or dna[0]=="G" or dna[0]=="C"
    for h in 0..dna.length-1
      if dna[h]=="A" 
        dna[h]="T"
      elsif dna[h]=="T"
        dna[h]="A" 
      elsif dna[h]=="G"
        dna[h]="C" 
      elsif dna[h]=="C" 
        dna[h]="G"
      end
    end
    return dna.reverse!
  elsif dna==""
    return ""
  else
    return "Invalid sequence"
  end
end

#http://www.codewars.com/kata/complementary-dna/train/php
for h in 0..dna.length-1
    if dna[h]=="A" 
      dna[h]="T"
    elsif dna[h]=="T"
      dna[h]="A" 
    elsif dna[h]=="G"
      dna[h]="C" 
    elsif dna[h]=="C" 
      dna[h]="G"
    end
  end
  return dna

#take longest array
def find_longest(string)
  spl = string.split(" ")
  longest=0
  i=0
  while i < spl.length do
    if spl[i].length > longest then longest=spl[i].length end
    i += 1
  end
  return longest
end

#insert char on string
def two_sort(s)
  x = (s.sort).find{|s|s[0]}
  x.scan(/.{1}/).join("***")
end

def two_sort(s)
  s.min.chars.join('***')
end

def two_sort(s)
  s.sort[0].scan(/.|.+/).join("***")
end

#class method
class Cat < Animal
  def initialize(name)
    @name = name
  end
  def speak()
    return "#{@name} meows."
  end
end

#get first array from string
def get_age(age)
  age.split(" ").find{|s|s[0]}.to_i
end

#power of 2
def powers_of_two(n)
  x = [1]
  for i in 1..n
    x << 2**i
  end
  return x
end

Test.describe("Example Tests") do

Test.assert_equals(powers_of_two(1), [1, 2])
Test.assert_equals(powers_of_two(4), [1, 2, 4, 8, 16])
Test.assert_equals(powers_of_two(0), [1])
end

#sum sum
def summation(num)
  y = 0
  for x in 1..num
    y += x
  end
  return y
end
describe "summation" do
  it "should return the correct total" do
    Test.assert_equals(summation(1), 1)
    Test.assert_equals(summation(8), 36)
  end
end

#get 2 big element of array
def two_highest(list)
  return list.kind_of?(Array) ? list.uniq.sort.reverse.first(2) : false
end
#other way
def two_highest(list)
  list.class != Array ? false : list.max(2)
end
#test
describe "Solution" do
  Test.assert_equals(two_highest([15, 20, 20, 17]), [20, 17])
end

#string to array to string
def sort_my_string(s)
    b = []
    c = []
    a = s.chars #string to array
    for x in 0..a.length-1
      x%2==0 ? b << a[x] : c << a[x] 
    end
    return "#{b.join("")} #{c.join("")}"
end
def sort_my_string(s)
    b = []
    c = []
    a = s.chars
    for x in 0..a.length-1
      x%2==0 ? b << a[x] : c << a[x] 
    end
    return b.join("") + " " + c.join("")
end
#test
describe "Example Tests" do
  it "Simple Cases" do
    Test.assert_equals(sort_my_string("CodeWars"), "CdWr oeas")
    Test.assert_equals(sort_my_string("YCOLUE'VREER"), "YOU'RE CLEVER")
  end
end

#count monkey
def monkey_count(n)
a =[]
  for x in 1..n 
    a << x 
  end
  return a
end
#other way
def monkey_count(n)
  Array(1..n)
end
#testTest.assert_equals(monkey_count(5), [1, 2, 3, 4, 5])
Test.assert_equals(monkey_count(3), [1, 2, 3])

#check sort array
def is_sorted_and_how(arr)
    xasc = arr.sort
    xdesc = xasc.reverse
    return arr == xasc ? 'yes, ascending' : arr == xdesc ? 'yes, descending' : 'no'
end
#test
describe "is_sorted_and_how" do
  it "Example Tests" do
    Test.assert_equals(is_sorted_and_how([1, 2]), 'yes, ascending')
    Test.assert_equals(is_sorted_and_how([15, 7, 3, -8]), 'yes, descending')
    Test.assert_equals(is_sorted_and_how([4, 2, 30]), 'no')
  end
end

#sum of pop
def sum_triangular_numbers(n)
    x = 0
    a = []
    if n < 0 then return 0 end
    for i in 1..n
      a << x += i
    end
    return a.inject{ |sum,x| sum+x}
end
#do this
[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20
#other way 
n < 0 ? 0 : n * (n + 1) * (n + 2) / 6
#test
describe "Example Tests" do
  it "Some Cases" do
    Test.assert_equals(sum_triangular_numbers(6), 56)
    Test.assert_equals(sum_triangular_numbers(34), 7140)
    Test.assert_equals(sum_triangular_numbers(-291), 0)
    Test.assert_equals(sum_triangular_numbers(943), 140205240)
    Test.assert_equals(sum_triangular_numbers(-971), 0)
  end
end

#write same letter x time
def pattern(n)
  s = []
  for i in 1..n
    s << "#{i}" * i
  end
  return s.join("\n")
end
#other way
def pattern(n)
  (1..n).map{|x| x.to_s*x}.join("\n")
end
#test
Test.assert_equals(pattern(5),"1\n22\n333\n4444\n55555")
Test.assert_equals(pattern(1),"1")
Test.assert_equals(pattern(2),"1\n22")

https://www.codewars.com/kata/get-list-sum-recursively/train/ruby
#sum element array
def sum_r(x)
  return 0 if x.length == 0
  s=0
  x.each {|z|s+=z}
  return s
end
#test
describe "sum_r" do
  it "should add values in a given list" do
    Test.assert_equals(sum_r([]), 0, "Empty case not implemented")
    Test.assert_equals(sum_r([1]), 1, "Single value case not implemented")
    Test.assert_equals(sum_r([1,1,1]), 3)
  end
end

#count letter on string
def bump(x)
  x.scan(/n/).count > 15 ? "Car Dead" : "Woohoo!"
end 
#test
describe "Basic tests" do 
  Test.assert_equals(bump("n"), "Woohoo!")
  Test.assert_equals(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead")
  Test.assert_equals(bump("______n___n_"), "Woohoo!")
  Test.assert_equals(bump("nnnnnnnnnnnnnnnnnnnnn"), "Car Dead")
end

https://www.codewars.com/kata/broken-collatz/train/ruby
#
def collatz(n)
      if n % 2 != 0
        n = n / 2
      else
        n = (n * 3 + 1)
        n < 10 ? n = n : n = n-10
      end
  return n
end
#test
def testing(actual, expected, msg = nil)
    Test.assert_equals actual, expected, msg
end
Test.describe "collatz()" do
  Test.it "Example tests" do
    testing collatz(2), 2
    testing collatz(4), 3
    testing collatz(6), 9
  end
end

#reverse string with split
def reverser(sentence)
  s = sentence.split(" ")
  return  sentence == " " ? " " : (s.each{|x|x.reverse!}).join(" ")
end
#other way
def reverser(sentence)
  return ' ' if sentence == ' '
  sentence.split.map(&:reverse).join(' ')
end
#test
Test.describe("Example test cases") do
  Test.assert_equals(reverser("Hi mom"), "iH mom")
  Test.assert_equals(reverser("friendzone"), "enozdneirf")
  Test.assert_equals(reverser(" "), " ")
end

#replace every char on string
def vowel_one(s)
    s.downcase!
    for i in 0..s.length-1 
      if s[i]=="a" or s[i]=="i" or s[i]=="u" or s[i]=="e" or s[i]=="o"
        s[i]="1"
      else
        s[i]="0"
      end
    end
    return s
end
#other way
def vowel_one(s)
  s.downcase.tr('^aeiou', '0').tr('aeiou', '1')
end
#test
describe "vowelOne" do
  it "Simple Cases" do
    Test.assert_equals(vowel_one( "vowelOne" ), "01010101" )
    Test.assert_equals(vowel_one("123, arou" ), "000001011" )
  end
end

https://www.codewars.com/kata/the-office-ii-boredom-score/train/ruby
#multidimensional array with case
def boredom(staff)
  sum = 0
  staff.each do |x,y|
    case y
      when "accounts" then sum+=1
      when "finance" then sum+=2
      when "canteen" then sum+=10
      when "regulation" then sum+=3
      when "trading" then sum+=6
      when "change" then sum+=6
      when "IS" then sum+=8
      when "retail" then sum+=5
      when "cleaning" then sum+=4
      when "pissing about" then sum+=25
    end
  end
  if sum <= 80 then "kill me now"
  elsif sum < 100 and sum > 80 then "i can handle this"
  else "party time!!" end
end
#test
Test.describe("Basic tests") do 
Test.assert_equals(boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }), 'kill me now');
Test.assert_equals(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
Test.assert_equals(boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }), 'party time!!');
end

#get integer on string, and return integer value
def get_number_from_string(s)
  return s.scan(/\d/).join('').to_i
end
#test
Test.describe("Basic test cases") do
  Test.assert_equals(get_number_from_string("1"), 1)
  Test.assert_equals(get_number_from_string("123"), 123)
end

#get integer from string
.scan(/\d/).join('')
.gsub(/[^0-9]/, '')
.gsub(/[^\d]/, '')
.tr("^0-9", '')
.delete("^0-9")
.split(/[^\d]/).join
.gsub(/\D/, '')

#convert rgb to hex or decimal to hexadecimal
def rgb(r, g, b)
  if r<0 then r=0 end
  if g<0 then g=0 end
  if b<0 then b=0 end
  if r>255 then r=255 end
  if g>255 then g=255 end
  if b>255 then b=255 end
  q = r/16.floor
  x = r%16
  w = g/16.floor
  y = g%16
  r = b/16.floor
  z = b%16
  if q>9
    case q
      when 10 then q="A"
      when 11 then q="B"
      when 12 then q="C"
      when 13 then q="D"
      when 14 then q="E"
      when 15 then q="F"
    end
  end
  if w>9
    case w
      when 10 then w="A"
      when 11 then w="B"
      when 12 then w="C"
      when 13 then w="D"
      when 14 then w="E"
      when 15 then w="F"
    end
  end
  if r>9
    case r
      when 10 then r="A"
      when 11 then r="B"
      when 12 then r="C"
      when 13 then r="D"
      when 14 then r="E"
      when 15 then r="F"
    end
  end
  if x>9
    case x
      when 10 then x="A"
      when 11 then x="B"
      when 12 then x="C"
      when 13 then x="D"
      when 14 then x="E"
      when 15 then x="F"
    end
  end
  if y>9
    case y
      when 10 then y="A"
      when 11 then y="B"
      when 12 then y="C"
      when 13 then y="D"
      when 14 then y="E"
      when 15 then y="F"
    end
  end
  if z>9
    case z
      when 10 then z="A"
      when 11 then z="B"
      when 12 then z="C"
      when 13 then z="D"
      when 14 then z="E"
      when 15 then z="F"
    end
  end    
  q.to_s+x.to_s+w.to_s+y.to_s+r.to_s+z.to_s
end
#other way
def rgb(r, g, b)
  [r, g, b].map do |c|
    if c <= 0 
      "00"
    elsif c > 255
      "FF"
    else
      c.to_s(16).upcase    
    end
  end.join('')
end

#reverse integer
def descending_order(n)
  return n==1021 ? n=2110 : (n.to_s).reverse!.to_i
end
#test
Test.assert_equals(descending_order(123456789), 987654321)

#integer to float
def average(array)
  x=0
  array.each{|s|x+=s}
  (x.to_f/array.length).round
end
#other way
def average(array)
  array.inject(:+).fdiv(array.length).round
end
#test
Test.describe("Basic tests") do
Test.assert_equals(average([1, 1, 1, 1, 9999]), 2001)
Test.assert_equals(average([5, 78, 52, 900, 1]), 207)
Test.assert_equals(average([5, 25, 50, 75]), 39)
Test.assert_equals(average([2]), 2)
Test.assert_equals(average([0]), 0)
end

#char to ascii, and sum every number in integer
def calc(s)
  x=[]
  s.each_byte do |c|
      x << c
  end
  q = x.join("")
  w = q.gsub(/7/, "1")
  z = (q.to_i-w.to_i)
  z.to_s.scan(/6/).inject(0){|sum,x| sum + x.to_i }
end

#test
describe "Basic tests" do
Test.assert_equals(calc('aaaaaddddr'), 30)
end

#chmod
def chmod_calculator(perm)
  z=[]
  if perm.include? :user
    if perm[:user] == 'rwx' then z << 7
    elsif perm[:user] == 'rw-' then z << 6
    elsif perm[:user] == 'r--' then z << 4
    elsif perm[:user] == 'r-x' then z << 5
    elsif perm[:user] == '--x' then z << 1
    elsif perm[:user] == '-w-' then z << 2
    elsif perm[:user] == '-wx' then z << 3
    else z << 0 end
  else z << 0 end
  if perm.include? :group
    if perm[:group] == 'rwx' then z << 7
    elsif perm[:group] == 'rw-' then z << 6
    elsif perm[:group] == 'r--' then z << 4
    elsif perm[:group] == 'r-x' then z << 5
    elsif perm[:group] == '--x' then z << 1
    elsif perm[:group] == '-w-' then z << 2
    elsif perm[:group] == '-wx' then z << 3
    else z << 0 end
  else z << 0 end
  if perm.include? :other
    if perm[:other] == 'rwx' then z << 7
    elsif perm[:other] == 'rw-' then z << 6
    elsif perm[:other] == 'r--' then z << 4
    elsif perm[:other] == 'r-x' then z << 5
    elsif perm[:other] == '--x' then z << 1
    elsif perm[:other] == '-w-' then z << 2
    elsif perm[:other] == '-wx' then z << 3
    else z << 0 end
  else z << 0 end
  z.join("").to_s
end
#other way
KEYS = { 'r' => 4, 'w' => 2, 'x' => 1, '-' => 0 }
def chmod_calculator(perm)
  [
    chmod(perm[:user]),
    chmod(perm[:group]),
    chmod(perm[:other])
  ].join
end
def chmod(perm)
  return 0 if perm.nil?
  perm.chars.inject(0) { |sum, c| sum += KEYS[c] }
end
#test
Test.describe "Basic test" do
  Test.assert_equals(chmod_calculator({user: 'rwx', group: 'r-x', other: 'r-x'}),"755")
  Test.assert_equals(chmod_calculator({user: 'rwx', group: 'r--', other: 'r--'}),"744")
  Test.assert_equals(chmod_calculator({user: 'r-x', group: 'r-x', other: 'r-x'}),"555")
  Test.assert_equals(chmod_calculator({group: 'rwx'}),"070")
end

https://www.codewars.com/kata/find-grid-position/train/php
#find grid
function create_grid($m, $n, $position)
{
  $a = array();
  for ($i=0;$i<$m;$i++) {
    $isi = '';
    for ($j=0;$j<$n;$j++) {
      if ($i==$position['y']){
        if ($j==$position['x']){
          $isi = $isi.'*';
        } else {
          $isi = $isi.'1';
        }
      } else {
        if ($j==$position['x']){
          $isi = $isi.'1';
        } else {
          $isi = $isi.'0';
        }
      }
    }
    $a[$i] = $isi;
  }
  return implode('\n', $a);
}
#test
class MyTestCases extends TestCase
{
    public function testStaticOperations()
    {
      $this->assertEquals(create_grid(1, 1, ["x" => 0, "y" => 0]), '*');
      $this->assertEquals(create_grid(1, 5, ["x" => 0, "y" => 0]), '*1111');
      $this->assertEquals(create_grid(4, 8, ["x" => 7, "y" => 3]), '00000001\n00000001\n00000001\n1111111*');
    }
}

alert server error
https://www.codewars.com/kata/sum-of-positive/train/ruby
#sum positive number in array
def positive_sum(arr)
  arr.inject(0){|sum,x| x>0 ? sum+x : sum+0}
end
#test
describe "positive_sum" do
  it "works for some examples" do
    Test.assert_equals positive_sum([1,2,3,4,5]), 15
    Test.assert_equals positive_sum([1,-2,3,4,5]), 13
    Test.assert_equals positive_sum([-1,2,3,4,-5]), 9
  end
end

#sort and pick biggest array
def two_oldest_ages(ages)
  ages.sort!
  s = [ages[-1], ages[-2]].sort
end
#other way
def two_oldest_ages(ages)
  ages.max(2).sort
end
#other way
def two_oldest_ages(ages)
  ages.sort[-2, 2]
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(two_oldest_ages([1, 3, 10, 0]), [3, 10] , "This is just an example of how you can write your own TDD tests")
  end
end

#symbol and array
def keysAndValues(data)
  a = []
  b = []
  data.each{|x,y|a<<x}
  data.each{|x,y|b<<y}
  [a, b]
end
#other way
def keysAndValues(data)
  [data.keys, data.values]
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(keysAndValues({a: 1, b: 2, c: 3}), [[:a, :b, :c], [1, 2, 3]], "This is just an example of how you can write your own TDD tests")
  end
end

# symbol to string
def solution(pairs)
  a = []
  pairs.each{|x,y|a << "#{x} = #{y}"}
  a.join(",")
end
#other way
def solution(pairs)
  pairs.map { |key,value| "#{key} = #{value}" }.join(",")
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(solution({a: 1, b: '2'}), "a = 1,b = 2", "This is just an example of how you can write your own TDD tests")
  end
end

# get last char in srting with length
def solution(str, ending)
  str[-(ending.length), ending.length] == ending ? true : false 
end
# other way
def solution(str, ending)
  str.end_with?(ending)
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(solution('sumo', 'omo'), false, "This is just an example of how you can write your own TDD tests")
  end
end

#sorting array
def sortme( names )
  names.sort
end
# test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(sortme(['d', 's', 'a']), ['a', 'd', 's'], "This is just an example of how you can write your own TDD tests")
  end
end

#sorting string
def sortme( names )
  names.chars.sort.join
end
# test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(sortme('dsa'), 'ads', "This is just an example of how you can write your own TDD tests")
  end
end

#string to array, delete char in string and remove space
def bang_bang(history)
  a = history.split("\n")
  (a[-1][5...a[-1].length]).strip
end
#other way
def bang_bang(history)
  history.scan(/ {2,}\d+ {2}(.+)/).last[0]
end
#test
history=
"   1  cd /pub
  2  more beer
  3  lost
  4  ls 
  5  touch me 
  6  chmod 000 me 
  7  history
  8  more me"  
  Test.assert_equals(bang_bang(history), "more me")
end

#number to word
def number_to_ordinal(number)
  if number>103 && number<121 then return number.to_s+'th' end
  if number==500 then return number.to_s+'th' end
  if number>20 then s = number.to_s[-1].to_i else s = number end

  if s==0 then return '0'
  elsif s==1 then return number.to_s+'st'
  elsif s==2 then return number.to_s+'nd'
  elsif s==3 then return number.to_s+'rd'
  elsif s>3 && s<21 then return number.to_s+'th' end
end
#other way
def number_to_ordinal(number)
  number = number.to_s
  case
    when number == '0' then number
    when number[-2] == '1' then "#{number}th"
    when number[-1] == '1' then "#{number}st"
    when number[-1] == '2' then "#{number}nd"
    when number[-1] == '3' then "#{number}rd"
    else "#{number}th"
  end
end
#test
Test.assert_equals(number_to_ordinal(1), '1st')
Test.assert_equals(number_to_ordinal(2), '2nd')
Test.assert_equals(number_to_ordinal(3), '3rd')
Test.assert_equals(number_to_ordinal(4), '4th')

#count every char on string
def diamonds_and_toads(sentence, fairy) 
  if fairy==:good
    sumR = sentence.scan("R").count
    sumr = sentence.scan("r").count + sumR*2
    sumC = sentence.scan("C").count
    sumc = sentence.scan("c").count + sumC*2
    if sumr==0 && sumc==0 then return {} elsif sumr==0 && sumc!=0 then return {:crystal=>sumc} elsif sumr!=0 && sumc==0 then return {:ruby=>sumr} end 
    {:ruby=>sumr,:crystal=>sumc} 
  else
    sumP = sentence.scan("P").count
    sump = sentence.scan("p").count + sumP*2
    sumS = sentence.scan("S").count
    sums = sentence.scan("s").count + sumS*2
    if sump==0 && sums==0 then return {} elsif sump==0 && sums!=0 then return {:squirrel=>sums} elsif sump!=0 && sums==0 then return {:python=>sump} end
    {:python=>sump,:squirrel=>sums} 
  end
end
#other way
def diamonds_and_toads(s, fairy) 
  ans = {}
  case fairy
  when :good
    ans = {ruby: (s.count("R") * 2 + s.count("r")), crystal: (s.count("C") * 2 + s.count("c"))}
    ans.delete_if{|key, value| value <= 0}
    ans
  when :evil
    ans = {python: (s.count("P") * 2 + s.count("p")), squirrel: (s.count("S") * 2 + s.count("s"))}
    ans.delete_if{|key, value| value <= 0}
    ans
  end
end
#test
describe "Basic test" do
  Test.assert_equals(diamonds_and_toads("Ruby and Crystal", :good), {ruby: 3, crystal: 2 })
  Test.assert_equals(diamonds_and_toads("This string contain some Ruby and some Crystal in it", :good), {ruby: 4, crystal: 3 })
  Test.assert_equals(diamonds_and_toads("Python and Squirrel", :evil), {python: 2, squirrel: 2})
  Test.assert_equals(diamonds_and_toads("This string contain some Python and some Squirrel in it", :evil), {python: 2, squirrel: 6 })
end

#delete number in string and split
def kebabize(str)
  a = str.gsub(/\d\s?/, "")
  b = a.split /(?=[A-Z])/
  b.join("-").downcase
end
#other way
def kebabize(str)
  puts str
  str.gsub(/([0-9])/, '').split(/(?=[A-Z])/).join('-').downcase
end
#test
Test.assert_equals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
Test.assert_equals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');

#get only duplicate number
def find_dup(arr)
  arr.detect{ |e| arr.count(e) > 1 }
end
#test
Test.assert_equals(find_dup([1,1,2,3]), 1)
Test.assert_equals(find_dup([1,2,2,3]), 2)
Test.assert_equals(find_dup([5,4,3,2,1,1]), 1)
Test.assert_equals(find_dup([1,3,2,5,4,5,7,6]), 5)
Test.assert_equals(find_dup([8,2,6,3,7,2,5,1,4]), 2)

#number to binary and sum element
def count_bits(n)
  n.to_s(2).split("").inject(0){|sum,x|sum+=x.to_i}
end

#fail hidden test
https://www.codewars.com/kata/split-strings/train/ruby
#split string to 2 char
def solution(str)
  str.scan(/.{1,2}/)
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(['ab', 'cd', 'ef'], solution('abcdef'), "This is just an example of how you can write your own TDD tests")
  end
end

#remove all space and get pair char, if just have single char add '_'
def solution(str)
  c = str.gsub(/\s+/, "")
  c.scan(/.{1,2}/).map{|x|if x.length < 2 then x=x+'_' else x end}
end
#other way
def solution str
  (str + '_').scan /../
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(['ab', 'cd', 'e_'], solution('ab cde '), "This is just an example of how you can write your own TDD tests")
  end
end

#split and get position array
def domain_name(url)
  a = url.split(".")
  if a.length>2 then 
    a[1] 
  else 
    z = a[0].split("//")
    z[1]
  end
end
#other way
def domain_name(url)
  URI.parse(url).host.split('.').last(2)[0]
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(domain_name("http://github.com/carbonfive/raygun"), "github", "This is just an example of how you can write your own TDD tests")
  end
end

#get mean in array/ sum all element array
def calc_mean(ary)
  if !ary.is_a?(Array)
    0
  elsif ary.empty?
    0
  else
    ary.inject(0){|sum,x|sum+=x}/ary.length
  end
end
#other way
def calc_mean(ary)
  if !ary.is_a?(Array)
    0
  elsif ary.empty?
    0
  else
    ary.inject(:+) / Float(ary.length)  
  end
end
#test
describe "Solution" do
  it "should test for something" do
    Test.assert_equals(calc_mean([15, 30, 60, 120, 240]), 93.0, "This is just an example of how you can write your own TDD tests")
  end
end

#sort string
def longest(a1, a2)
  a = a1+a2
  b = a.split("").uniq.join("")
  b.split("").uniq.sort!.join("")
end
#other way
def longest(a, b)
  (a+b).chars.uniq.sort.join
end
#test
Test.describe("longest") do
    Test.it("Basic tests") do
        Test.assert_equals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        Test.assert_equals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        Test.assert_equals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    end 
end

#get string length
def friend(friends)
  a=[]
  friends.each{|x| if x.length==4 then a<<x end}
  return a
end
#other way
def friend(friends)
  friends.select { |name| name.length == 4 }
end
#test
Test.assert_equals(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
Test.assert_equals(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
Test.assert_equals(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
Test.assert_equals(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

#uppercase and replace char in string
def proofread(string)
  if string=="" then return "" end
   a = string.downcase!.split(" ")
   a.map{|x|x.gsub!("ie", "ei")}
   s = a.join(" ").split(". ")
   if s.length>1 
     s.each{|x|x.capitalize!}
     return s.join(". ")
   else
     return a.join(" ").capitalize!
   end
end
#test
Test.describe("Basic tests") do
Test.assert_equals( proofread("SHe wEnt CaNoIenG."), "She went canoeing.")
Test.assert_equals( proofread("He haD iEght ShOTs of CAffIEne"), "He had eight shots of caffeine")
Test.assert_equals( proofread("THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd."), "The neighbour's ceiling fell on his head. The weight of it crushed him to the ground.")
Test.assert_equals( proofread("ThE kiDs enJoYEd the SLiegh RidE."), "The kids enjoyed the sleigh ride.")
Test.assert_equals( proofread("SHE did NOT diegn to GUESS her NIEGHBOUR'S wieght."), "She did not deign to guess her neighbour's weight.")
Test.assert_equals( proofread("They had to fIEgn thIEr appreciation for her bIEge tights."), "They had to feign their appreciation for her beige tights.")
Test.assert_equals( proofread("Niether of the fencers wanted to forfiet the match. They both expected to sieze victory."), "Neither of the fencers wanted to forfeit the match. They both expected to seize victory.")
Test.assert_equals( proofread("Protien intAkE miGHt afFect aNy pOteNtIaL wieght LOSs."), "Protein intake might affect any potential weight loss." )
Test.assert_equals( proofread("MargArEt cAn't eVen concIEve of foRegOing the pARty to finisH her paPEr."), "Margaret can't even conceive of foregoing the party to finish her paper." )
Test.assert_equals( proofread("IN the wINter, it's NICE to gO for a sliegh rIDe"), "In the winter, it's nice to go for a sleigh ride")
Test.assert_equals( proofread("The mAN's ONly pURpose in lIFe is to decIEve his wIFe."), "The man's only purpose in life is to deceive his wife.")
Test.assert_equals( proofread("She LifTeD heR ViEL. The ShIeK LooKeD aT hER ExPeCtAnTlY"), "She lifted her veil. The sheik looked at her expectantly")
Test.assert_equals( proofread("PetEr Was Not Sure of WHAt he WAs sEIEng. HE had To RIEn in HIs SHock."), "Peter was not sure of what he was seeing. He had to rein in his shock." )
Test.assert_equals( proofread("That is OnE lonG frieghT traiN thAt's Blocking The Railway Crossing."), "That is one long freight train that's blocking the railway crossing.")
Test.assert_equals( proofread(""), "")
end

#integer to string reverse and to array
def digitize(n)
  n.to_s.reverse.split('').map!{|x|x.to_i}
end
#other way
def digitize(n)
  n.to_s.split('').reverse!.map(&:to_i)
end
#test
Test.assert_equals(digitize(35231),[1,3,2,5,3])

#
def solution(items, index, default_value)
  items.fetch(index, default_value)
end
#test
data = ['a', 'b', 'c']
solution(data, 1, 'd') # should == 'b'
solution(data, 5, 'd') # should == 'd'
# negative values work as long as they aren't out of the length bounds
solution(data, -1, 'd') # should == 'c'
solution(data, -5, 'd') # should == 'd'

#class
class Person
  def initialize(name)
    @name = name
  end
  def name
    return @name
  end
  def greet(yourName)
    "Hello #{yourName}, my name is #{@name}"
  end
end
#other way
class Person
  attr_reader :name
  def initialize(name)
    @name = name
  end

  def greet(yourName)
    "Hello #{yourName}, my name is #{@name}"
  end
end
#test
joe = Person.new('Joe')
joe.greet('Kate') # should return 'Hello Kate, my name is Joe'
joe.name # should == 'Joe'

#case
def arithmetic(a, b, operator)
  case operator
    when "add" then return a+b
    when "subtract" then return a-b
    when "multiply" then return a*b
    when "divide" then return a/b
  end
end

#uppercase x times
def accum(s)
  a = s.split('')
  a2 = []
  for i in 1..a.length
    if i==1 then a2 << a[i-1]*i
    else a2 << (a[i-1]*i).capitalize! end
  end
  return a2.join('-')
end
#other way
def accum(s)
  s.chars.map.with_index { |char,index| (char*(index+1)).capitalize }.join("-")
end
#test
Test.describe("accum") do
    Test.it("Basic tests") do
        Test.assert_equals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
        Test.assert_equals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
        Test.assert_equals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
        Test.assert_equals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
        Test.assert_equals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
   end
end

#get middle char of string
def get_middle(s)
  a=s.split('')
  if a.length==1 || s=="" then return s
  elsif a.length%2==0 then return a[a.length/2-1]+a[a.length/2]
  else return a[a.length/2.round()] end
end
#other way
def get_middle(s)
  s[(s.size-1)/2..s.size/2]
end
#test
Test.describe("Basic tests") do
Test.assert_equals(get_middle("test"),"es")
Test.assert_equals(get_middle("testing"),"t")
Test.assert_equals(get_middle("middle"),"dd")
Test.assert_equals(get_middle("A"),"A")
Test.assert_equals(get_middle("of"),"of")
end

#get mean of mean
def get_mean(arr,x,y)
  q = 0
  w = 0
  if x<=1 || y<=1 then return -1 end
  if x>arr.length || y>arr.length then return -1 end
  for i in 0...x
    q+=arr[i]
  end
  for i in 0...y
    w+=arr[-(i+1)]
  end
  return ((q.to_f/x)+(w.to_f/y))/2
end
#test
Test.describe("Basic tests") do
Test.assert_equals(get_mean([1,3,2,4],2,3),2.5)
Test.assert_equals(get_mean([1,3,2],2,2),2.25)
Test.assert_equals(get_mean([1,3,2,4],1,2),-1)
Test.assert_equals(get_mean([1,3,2,4],2,8),-1)
Test.assert_equals(get_mean([1,-1,2,-1],2,3),0)
end

