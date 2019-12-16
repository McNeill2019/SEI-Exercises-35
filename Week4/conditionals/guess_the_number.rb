#Guess the number

#Activity:

#You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

#generate a random number

#the user has to guess until correct.

#Specification:
#The user should be asked to guess a number
#If the user's guess is correct, the user should see a congratulatory message
#If the user's guess is not correct, the user should be asked to guess the number again.

# my go:

#print "guess the computers number by choosing a number between 0 and 10:"

#number = gets.chomp.to_i

#random_number = Random.rand(11)

#loop do
  #if number == random_number
    #puts "congratulations you guessed correctly"
    #break
  #else
    #puts "guess again!"
    #puts "enter another number between 0 and 10:"
    #number = gets.chomp.to_i
 #end
#end

## luke solutions

require 'colorize' #load the colorize library
require 'pry'

print "Enter maximum value: "
max_value = gets.to_i

secret_number = rand(0..max_value) # not including 10

guess = -1 #initialised with a number that can't be correct to guarantee we will get in to the loop.

#while guess != secret_number

until guess == secret_number

  print "Enter your guess: "
  guess = gets.to_i

  #if guess != secret_number
      #puts "Wrong! Guess again..."
  #  end

  #binding.pry # pause the code here and open pry


  if guess > secret_number
    puts "Guess lower!".red
  elsif guess < secret_number
    puts "Guess higher!".yellow
  end
end

puts "Correct!"
