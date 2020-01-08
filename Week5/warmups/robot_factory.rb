# Robot Factory 🤖
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
#
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
#
# Names typically take the format of things like "BX777" or "SD234".
require 'pry'

class Robot

def initialize

  @name = generate_name #save the method in @name variable
  @instructions_counter = 0 #counts the number of instructions.
  @create_at = Time.now.to_i #when the robot was created.
  @reset_at = Time.now.to_i #when the robot was reset.
end

def generate_name
  letters = ("A".."Z").to_a.sample(2).join
  numbers = ("000".."999").to_a.sample
  letters + numbers
end

def name
  @instructions_counter +=1
  @name
end

def instructions_counter
  @instructions_counter
end

def reset
  @instructions_counter +=1
  @name = generate_name
  @reset_at = Time.now.to_i
end

def timers
@time_since_creation = Time.now.to_i - @create_at
@time_since_last_reboot = Time.now.to_i = @reset_at
"#{@time_since_last_reboot} seconds since last boot, #{@time_since_creation} seconds since creation."

end

end


robot1 = Robot.new
puts robot1.name
puts robot1.timers
puts robot1.reset
puts robot1.instructions_counter


robot2 = Robot.new
puts robot2.name
puts robot2.timers
puts robot2.reset
puts robot2.instructions_counter

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
#
# if I say:
#
# robot3 = Robot.new
#
# puts robot3.name
# => "RF629"
#
# robot3.reset
#
# puts robot3.name
# => "ZC532"
#
#
#
# Extensions 🧯
# Counters 🔢
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.
#
# For every action our robot takes, we should keep track of it.
#
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
#
# robot3.reset
# puts robot3.name
# puts robot3.name
#


# puts robot3.instruction_count
# => 5
# Robot Time ⌚️
# Number of instructions is important, but so is the total age of the robot.
#
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
#
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"
