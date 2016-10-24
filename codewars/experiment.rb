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

