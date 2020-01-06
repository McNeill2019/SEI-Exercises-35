#Array and Hash access

#A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

#How would you return the string "Erik"?

p a[1]

#How would you add your name to the array?

p a.push("Jamie")

# B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?

p string_one = h[1]

# How would you return the string "Two"?

p string_two = h[:two]

# How would you return the number 2?

p string_2 = h["two"]

# How would you add {3 => "Three"} to the hash?

p adding_3  = h[3] = "Three"

# How would you add {:four => 4} to the hash?

p adding_4 = h[:four] = 4

# C. Given the following data structure:

p is = {true => "It's true!", false => "It's false"}

# What is the return value of

p is[2 + 2 == 4]

#it's true

# What is the return value of

p is["Erik" == "Jonathan"]

#it's false

# What is the return value of

p is[9 > 10]

#it's false

# What is the return value of

 p is[0]

 #nil

# What is the return value of

p is["Erik"]

#nil

# D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
    },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
    },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
   },
 }

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?

 p users[ 'Jonathan' ][ :twitter ]

# How would you add the number 7 to Erik's favorite numbers?

users[ ' Erik ' ][ :favorite_numbers ].push 7

# How would you add yourself to the users hash?

users['jamie'] = {
  :twitter => 'textchimp'
  :favorite_numbers => [1,2,3]
}

# How would you return the array of Erik's favorite numbers?

users[ 'Erik'][ :favorite_numbers ]

# How would you return the smallest of Erik's favorite numbers?

users[ 'Erik' ][ :favorite_numbers ].min

# How would you return an array of Anil's favorite numbers that are also even?

anils_faves = users[ 'Anil '][ :favorite_numbers ]

anils_faves.select do |fave|
  fave.even?
end

# How would you return an array of the favorite numbers common to all users?

shared_nums = users.values.first[:favorite_numbers]

users.values.each do |user|
 shared_nums = shared_nums & user[ :favorite_numbers ]
end

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

all_faves_nested = users.values.map do |user|
  user[:favourite_numbers]
end

p all_faves_nested.flatten.uniq.sort 
