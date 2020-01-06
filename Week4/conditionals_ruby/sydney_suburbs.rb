#3. Sydney Suburbs

#Create a program that asks what suburbs you live in.

#Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).


print "Which suburb do you live in?:"
suburb = gets.chomp.downcase

if suburb == "bondi"
  puts "Nice boat shoes!"
elsif suburb == "newport"
  puts "oh, so you're a white supremacist?"
elsif suburb == "manly"
  puts "Surf's up bro! Watch out for the tourists!"
elsif suburb == "newtown"
  puts "Cool tattoo. Smash the state!"
else
  puts "I'm sure it's very nice there!"
end


case suburb
when "bondi" then puts "Nice boat shoes!"
when "newport" then puts "oh, so you're a white supremacist?"
when "manly" then puts "Surf's up bro! Watch out for the tourists!"
when "newtown" then puts "Cool tattoo. Smash the state!"
else
puts "I'm sure it's very nice there!"
end

#case statements are expressions eg they return values.

answer = case suburb
when "bondi" then "Nice boat shoes!"
when "newport" then "oh, so you're a white supremacist?"
when "manly" then "Surf's up bro! Watch out for the tourists!"
when "newtown" then "Cool tattoo. Smash the state!"
else
  "I'm sure it's very nice there!"
end

puts answer
