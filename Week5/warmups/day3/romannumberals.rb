# Roman Numerals
#
# The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero.
#
# This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example, the BBC uses Roman numerals to date their programmes.
#
# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets using a chisel).
#
#  1  => I
# 10  => X
#  7  => VII
#
# Write a program that will convert Arabic numerals to Roman numerals.
#
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
#
# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."
#
# To see this in practice, consider the example of 1990.
#
# In Roman numerals 1990 is MCMXC:
#
# 1000=M 900=CM 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM 8=VIII
#
# See http://www.romannumerals.co.uk/roman-numerals/numerals-chart.html for the table of Roman Numbers you will need to check for.
#
# Do this in Ruby.
#

class Roman

def initialize

  @roman_numerals = {
    3000 => "MMM",
    2000 => "MM",
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => 'IX',
    5 => "V",
    4 => "IV",
    1 => "I"
  }

end

  def calculate (number)

  result = ''

    @roman_numerals.each do |key, value|
      while number >= key
        result += value
        p "The result is: #{result}"
        number -= key
        p "The number is: #{ number }"
       end
    end
    result

  end

end

to_roman = Roman.new

p to_roman.calculate 1990
