#Warmup - Raindrops

#Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:

#If the number contains 3 as a factor, output 'Pling'.

#If the number contains 5 as a factor, output 'Plang'.

#If the number contains 7 as a factor, output 'Plong'.

#If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

print "Enter number to test:"

guess = gets.chomp.to_i

def number (guess)

  if guess % 3 == 0 && guess % 5 == 0 && guess % 7 == 0
  puts "PlingPlangPlong"
  elsif guess % 3 == 0 && guess % 5 == 0
  puts "PlingPlang"
  elsif guess % 3 == 0 && guess % 7 == 0
  puts "PlingPlong"
  elsif guess % 7 == 0
  puts "Plong"
  elsif guess % 5 == 0
  puts "Plang"
  elsif guess % 3 == 0
  puts "Pling"
  else
  puts "#{guess}"
  end

end


number (guess)

#josh solution:

def raindrops number

  string = ""

  if number % 3 == 0
    string += "Pling"
  end
  if number % 5 == 0
      string += "Plang"
  end
  if number % 5 == 0
      string += "Plong"
  end

  if string.length == 0
    string = number.to_s
  end

  puts "input is #{number} the word is #{string}"

end


def raindrops number

  string = ""

  string += "Pling" if number % 3 == 0
  string += "Plang" if number % 5 == 0
  string += "Plong" if number % 7 == 0

  string.empty? ? number.to_s : string

end

puts "input 28: #{raindrops 28}"
