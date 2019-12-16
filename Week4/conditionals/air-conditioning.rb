#Air conditioning

#Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

#If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"

#If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"

#If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "what is the current temperature?"

current_temp = gets.to_f

print "is the air conditioning functional? (yes or no)"

air_con_functional = gets.chomp.downcase

print "what temperature do you want it to be?"

desired_temp = gets.to_f

if air_con_functional == "yes" && current_temp > desired_temp
  p "Turn on the A/C please"
elsif air_con_functional == "no" && current_temp > desired_temp
  p "Fix the A/C now! it's hot!"
elsif air_con_functional == "no" && current_temp < desired_temp
  p "Fix the A/C whenever you have the chance... It's cool..."
else
end


#if air_con_functional == "yes"

  #working
  #if current_temp > desired_temp
  #  puts "turn on the A/C please"
  #end

#else

  # not working
  #if current_temp > desired_temp
  #  puts "Fix the A/C it's hot"
  #else "fix the A/C whenever you have chance.. it's cool"
  #end

#end
