# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).

# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').

# Example:

# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

# Source
# The Calculating DNA Nucleotides problem at Rosalind



# Search through this variable and print out how many times A,C,G,T appear


count_nucleotides = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

array = count_nucleotides.chars

p array

puts "There are #{array.count("A")} A's in the string \n\n "

puts "There are #{array.count("C")} C's in the string \n\n"

puts "There are #{array.count("G")} G's in the string \n\n"

puts "There are #{array.count("T")} T's in the string \n\n"


solution

def count_nucleotides dna

  bases_count = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0
  }

dna.each_char do |base|

  if bases_count.key? base

    bases_count[ base ] += 1

  else

    puts " #{base} is not a valid nucleotide"

  end

  bases_count.each do [key,val]
    puts "#{key}: #{val}"

  end

end

count_nucleotides = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
