# Simple Sums - Ruby

# Write a program that can calculate the sum of the first n elements of the following sequences:

# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

# For example:

# s1(4) = 0
# s2(4) = 10


# def s1(number)
#
# sequence_1 = [1 - 1, 1 - 1, 1 - 1, 1 - 1, 1 - 1]
#
#     if number == 1
#       puts sequence_1[1]
#     elsif number == 2
#       puts sequence_1[1] + sequence_1[2]
#     elsif number == 3
#       puts sequence_1[1] + sequence_1[2] + sequence_1[3]
#     elsif number == 4
#       puts sequence_1[1] + sequence_1[2] + sequence_1[3] + sequence_1[4]
#     elsif number == 5
#       puts  sequence_1[1] + sequence_1[2] + sequence_1[3] + sequence_1[4] + sequence_1[5]
#     else
#       puts "invalid number"
#     end
#
# end
#
# def s2(number)
#
# sequence_2 = [1 + 2, 3 + 4, 5 + 6, 7 + 8, 9 + 10]
#
#     if number == 1
#       puts sequence_2[1]
#
#     elsif number == 2
#       puts sequence_2[1] + sequence_2[2]
#     elsif number == 3
#       puts sequence_2[1] + sequence_2[2] + sequence_2[3]
#     elsif number == 4
#       puts sequence_2[1] + sequence_2[2] + sequence_2[3] + sequence_2[4]
#     elsif number == 5
#       puts sequence_2[1] + sequence_2[2] + sequence_2[3] + sequence_2[4] + sequence_2[5]
#     else
#       puts "invalid number"
#     end
#
# end
#
# s1(2)
#
# s2(4)
#
# # Can you guess what the sum would be if n is infinity?


class SimpleSums

  def initialize (number)
    @number = number
  end

  # getter method
  def number
    @number
  end

  def s1
    @number % 2
  end

  def s2

    # sum_s2 = @number * (@number + 1) / 2
    # sum_s2
    sum_s2 = 0

    (1..@number).each do |num|
      sum_s2 += num
    end

  end

end

  sum =SimpleSums.new(4)

  p sum.number
  p sum.s1
  p sum.s2
