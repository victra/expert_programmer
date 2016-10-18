====> comment one line
#content comment

====> comment many line
=begin
content comment
=end

====> input text
gets.chomp

====> write text
print

====> write text with new line
puts

====> aritmatika
i = 2
kuadrat: i ** 2
tambah: i + 1
kurang: i - 1
bagi: i / 2 # other way: i.fdiv(2)
hasil bagi: i % 2 # output is 0


====> write variabel
v = "test"
puts "value v : "+v

====> write variabel with on string
v = "test"
puts "value v : #{v}"

====> each array
v = [1, 2, 3]
v.each {|x| puts x}

====> each array with other way
v = [1, 2, 3]
v.each do |x| 
	puts x
end

====> while
i = 0
while i<=20 do
	puts i
	i += 1
end

====> repeat until
i = 0
until i==20 do
	puts i
	i += 1
end

====> for
for i in 0..20
	puts i
end

====> times
i = 0
20.times do
	puts i
	i += 1 #it same about i = i+1
end

====> loop
i = 20
loop do
  i -= 1
  next if i>=19 
  puts "#{i}"
  break if i <= 0
end

====> in ruby array can write with hash syntax
php: x = array();
	or just x = [];
ruby x = Hash.new() #remember Hash write with capitalize!
	or just x = Hash.new
	or just x = {}

====> array with key
x = {
	"red" => "merah"
	"green" => "hijau"
	"black" => "hitam"
}

====> array multidimensional
x = [[1, 2, 3], ["iam", "dark", "king"]]

====> write array multidimensional
x.each {|n,v| puts "number: "+n+" value: #{v}\n"}

====> write just one value array
x = ["red", "green", "black"]
puts x[1] #will display green

====> write just one key of array multidimensional
x = {
	"red" => "merah"
	"green" => "hijau"
	"black" => "hitam"
}
puts x[red]

====> write all value of array multidimensional
x = {
	"red" => "merah"
	"green" => "hijau"
	"black" => "hitam"
}
x.each do |eng,ina|
	puts ina
end

====> sort array
x = [1, 4, 5, 3, 2]
x.sort! # will display [1, 2, 3, 4, 5]

====> sort string
x = ["a", "c", "b", "d", "e"]
x.sort! # will display ["a", "b", "c", "d", "e"]

====> sort with other way
books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

books.sort! { |firstBook, secondBook| firstBook <=> secondBook }
books.sort! {|firstBook, secondBook| secondBook <=> firstBook}

====> method
def name_method
	content_method
end

====> method with return boolean
def is_true?
	content_method
end

====> method with parameter
def welcome(name)
	return "Hello #{name}"
end

welcome("Dark King")

====> to string, float, integer, simbol
i = 2
i.to_s
i.to_f
i.to_i
i.to_sym

====> sorting array with method
def alphabetize(arr, rev=false)
  if rev
    arr.sort { |item1, item2| item2 <=> item1 }
  else
    arr.sort { |item1, item2| item1 <=> item2 }
  end
end

books = ["Heart of Darkness", "Code Complete", "The Lorax", "The Prophet", "Absalom, Absalom!"]

puts "A-Z: #{alphabetize(books)}"
puts "Z-A: #{alphabetize(books, true)}"

====> sorting array with simple way
def alphabetize(arr, rev=false)
    arr.sort!
    if rev
        arr.reverse!
    end
    return arr
end

numbers = [5, 1, 3, 8]

puts alphabetize(numbers)

====> array with semi colon
menagerie = { :foxes => 2,
  :giraffe => 1,
  :weezards => 17,
  :elves => 1,
  :canaries => 4,
  :ham => 1
}
output: {:foxes=>2, :giraffe=>1, :weezards=>17, :elves=>1, :canaries=>4, :ham=>1}

====> the function semicolon
puts "string".object_id
puts "string".object_id

puts :symbol.object_id
puts :symbol.object_id

output:
15100680
15100480
319848
319848

====> push array with push
strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

symbols = []
strings.each do |s|
    s = s.to_sym
    symbols.push(s)
end

easy way with this:
alphabet = ["a", "b", "c"]
alphabet << "d"

output:
["a", "b", "c", "d"]

caption = "A giraffe surrounded by "
caption << "weezards!"

output:
"A giraffe surrounded by weezards!"

====> symbol not use string
movies = {
    :warkop => "comedy",
    :jumanji => "advanture"
}

====> other way write symbol
movies = {
    warkop: "comedy",
    jumanji: "advanture"
}

====> how fast symbol
require 'benchmark'

string_AZ = Hash[("a".."z").to_a.zip((1..26).to_a)]
symbol_AZ = Hash[(:a..:z).to_a.zip((1..26).to_a)]

string_time = Benchmark.realtime do
  100_000.times { string_AZ["r"] }
end

symbol_time = Benchmark.realtime do
  100_000.times { symbol_AZ[:r] }
end

puts "String time: #{string_time} seconds."
puts "Symbol time: #{symbol_time} seconds."

====> select the symbols
movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}

good_movies = movie_ratings.select{|m,r| r > 3}
puts good_movies

====> write just key other way
movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 3,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}

movie_ratings.each {|m,r| puts m}

====> use unless for false
ruby_is_ugly = false

unless ruby_is_ugly
	puts "Ruby's not ugly!"
end

====> this is ruby
ruby_is_eloquent = true
ruby_is_ugly = false

puts "Ruby is eloquent!" if ruby_is_eloquent
puts "Ruby's not ugly!" unless ruby_is_ugly

====> Ternary
puts 1>0 ? "benar":"salah" #this is same with php he..he..he..

====> Case
puts "Hello there!"
greeting = gets.chomp

case greeting
    when "english" then puts "Hello!"
    when "french" then puts "Bonjour!"
    when "german" then puts "Guten Tag!"   
    when "finnish" then puts "Haloo!"
    else puts "I don't know that language!"
end

====> Case another way
puts "Hello there!"
greeting = gets.chomp

case greeting
    when "english"
      puts "Hello!"
    when "french"
      puts "Bonjour!"
    when "german"
      puts "Guten Tag!"   
    when "finnish"
      puts "Haloo!"
    else puts "I don't know that language!"
end

====> set value that nill
favorite_book = nil
puts favorite_book

favorite_book ||= "Cat's Cradle"
puts favorite_book

favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book

favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book

output:

Cat's Cradle
Cat's Cradle
Why's (Poignant) Guide to Ruby'

====> write code that divisible of 2
my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my_array.each {|x| puts x if x % 2 == 0  }

output: 2
4
6
8
10

====> use upto
"L".upto("P") {|x| puts x }
output:
L
M
N
O
P

====> many way to code
age = 26
"I am " + age.to_s + " years old."
#==> "I am 26 years old."
"I am " << age.to_s << " years old."
#==> "I am 26 years old."
"I am #{age} years old."
#==> I am 26 years old.

====> push array multidimensional
movies = {
    "warkop" => "4",
    "deadpool" => "4"
}

puts "what is movie title?"
title = gets.chomp
puts "how about the rating?"
rating = gets.chomp
movies[title] = rating
output:
{"warkop"=>"4", "deadpool"=>"4"}
what is movie title?
 jumanji
how about the rating?
 3
movie was added!
{"warkop"=>"4", "deadpool"=>"4", "jumanji"=>"3"}

====> Play with array(CRUD array)
movies = {
    "warkop" => "4",
    "deadpool" => "4"
}

puts "what do you want your movie"
choice = gets.chomp

case choice
    when "add"
        puts movies
        puts "what is movie title?"
        title = gets.chomp
        if movies[title].nil?
            puts "how about the rating?"
            rating = gets.chomp
            movies[title.to_sym] = rating.to_i
            puts "movie was added!"
            puts movies
        else
            puts "that the movie already exists"
        end
    when "update"
        puts movies
        puts "What movie that you want to update rating?"
        title = gets.chomp
        if movies[title].nil?
            puts "Your movie not found!"
        else
            puts "Set the rating movie"
            rating = gets.chomp
            movies[title] = rating.to_i
            puts "rating was update!"
            puts movies
        end
    when "display"
        movies.each do |m,r|
            puts "#{m}: #{r}"
        end
    when "delete"
        puts movies
        puts "Type movie that you want to delete?"
        title = gets.chomp
        if movies[title].nil?
            puts "Movie not found!"
        else
            movies.delete(title)
            puts "That movie was deleted"
            puts movies
        end
    else puts "Error!"
end

====> collect 
my_nums = [1, 2, 3]
my_nums.collect { |num| num ** 2 }
output:
[1, 4, 9]
=begin
This is because .collect returns a copy of my_nums,
but doesn't change (or mutate) the original my_nums array. 
If we want to do that, we can use .collect!
=end
my_nums.collect! { |num| num ** 2 }
=begin
Recall that the ! in Ruby means "this method could do something dangerous or unexpected!"
In this case, it mutates the original array instead of creating a new one.
=end

====> example collect
fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

print "#{fibs}\n"
doubled_fibs = fibs.collect {|x| x**2}
print "#{fibs}\n"
print doubled_fibs
output:
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
[1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025]

print "#{fibs}\n"
doubled_fibs = fibs.collect! {|x| x**2}
print "#{fibs}\n"
print doubled_fibs
output:
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
[1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025]
[1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025]

====> yield
def double(param)
    puts "yeehhaaaa"
    yield(param)
    puts "end"
end

double(2) {|x|puts x*2}

output:
yeehhaaaa
4
end

====> Proc
multiples_of_3 = Proc.new do |n|
  n % 3 == 0
end

(1..100).to_a.select(&multiples_of_3)

output:
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99] 

====> Proc with call
hi = Proc.new do
    puts "Hello!"
end

hi.call
output:
Hello!

====> floor
floats = [1.2, 3.45, 0.91, 7.727, 11.42, 482.911]

round_down = Proc.new do |x|
    x.floor
end

ints = floats.collect(&round_down)

output:
[1, 3, 0, 7, 11, 482]

====> symbols meet 
Procnumbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

strings_array = numbers_array.map(&:to_s)

output:
["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

====> lambda
def lambda_demo(a_lambda)
  puts "I'm the method!"
  a_lambda.call
end

lambda_demo(lambda { puts "I'm the lambda!" })

output:
I'm the method!
I'm the lambda!

====> wonderfull lambda
strings = ["leonardo", "donatello", "raphael", "michaelangelo"]

symbolize = lambda {|x| x.to_sym}

symbols = strings.collect(&symbolize)

output:
[:leonardo, :donatello, :raphael, :michaelangelo]

====> different proc and lambda?
def batman_ironman_proc
  darkking = Proc.new { return "Batman will win!" }
  darkking.call
  "Iron Man will win!"
end

puts batman_ironman_proc

def batman_ironman_lambda
  darkking = lambda { return "Batman will win!" }
  darkking.call
  "Iron Man will win!"
end

puts batman_ironman_lambda

output:
Batman will win! #this is pro
Iron Man will win! #this is lambda

====> filter with array
my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]

symbol_filter = lambda {|x| x.is_a? Symbol}

symbols = my_array.select(&symbol_filter)

output:
[:kettles, :mittens, :packages] 

====> class
class Computer
  $manufacturer = "Mango Computer, Inc."
  @@files = {hello: "Hello, world!"}
  
  def initialize(username, password)
    @username = username
    @password = password
  end
  
  def current_user
    @username
  end
  
  def self.display_files
    @@files
  end
end

# Make a new Computer instance:
hal = Computer.new("Dave", 12345)

puts "Current user: #{hal.current_user}"
# @username belongs to the hal instance.

puts "Manufacturer: #{$manufacturer}"
# $manufacturer is global! We can get it directly.

puts "Files: #{Computer.display_files}"
# @@files belongs to the Computer class.

output:
Current user: Dave
Manufacturer: Mango Computer, Inc.
Files: {:hello=>"Hello, world!"}

====> you can do thisclass ApplicationError
  def display_error
    puts "Error! Error!"
  end
end

class SuperBadError < ApplicationError
end

err = SuperBadError.new
err.display_error

output:
Error! Error!

====> Override class
class Creature
  def initialize(name)
    @name = name
  end
  
  def fight
    return "Punch to the chops!"
  end
end

# Add your code below!
class Dragon < Creature
   def fight
       return "Breathes fire!"
   end
end

show = Dragon.new
puts show.fight

output:
Breathes fire!

====> OOP
class Account
    attr_reader :name, :balance
    def initialize(name,balance=100)
        @name = name
        @balance = balance
    end
    
    private 
    def pin
        @pin = 1234
    end
    def pin_error
        return "Access denied: incorrect PIN."
    end
    
    public
    def display_balance(pin_number)
        if pin_number == pin
            puts "Balance: $#{@balance}."
        else
            pin_error
        end
    end
    def withdraw(pin_number,amount)
        if pin_number == pin
            puts "Withdrew #{amount}. New balance: $#{@balance}."
        else
            pin_error
        end
    end
end

checking_account = Account.new("Conteriano",10_000_000)
puts checking_account.display_balance(4321)
puts checking_account.display_balance(1234)
puts checking_account.withdraw(4321,10001)
puts checking_account.withdraw(1234,10001)

output:
Access denied: incorrect PIN.
Balance: $10000000.

Access denied: incorrect PIN.
Withdrew 10001. New balance: $10000000.