
require 'pry'


class Person

  # This will write the getter and setter methods from the @name instance variable
  # . name and .name=
  attr_accessor :name, :age

  # #To make the @age instance varible accessible to the outside world, we actually have to write a method that returns it. This is called a 'getter' method.
  #
  # def age
  #   @age
  # end
  #
  # # Create a 'setter' so that we can change @age from outside the class
  # def age=( new_age )
  #   @age = new_age
  # end

  #This is a class method: you call it on the class itself, not on an object
  #instance of the class: Person.describe_person
  def self.describe_person
    puts "This class is for making Person objects!"
    Person.new ('Generic Human', 1)
  end



  #The initialise method is run whenever we do Person.new
  #It's called a 'constructor'
  def initialize( first_name, current_age )

    puts "You will see this code when you run Person.new"

    # Something that is often done in an intialise method is initialising some instance variables. Each object (instance) gets it's own copy of such variables.

    @number = rand 100 #instance variable.

    # Use the argument to this method to initialise an instance variable;

    @name = first_name
    @age = current_age

  end

  def hello

    puts "Hello! I am #{ @name } and I am an #{ @age } Please like and subscribe to my page."
    puts "my lucky number is #{ @number }"

  end

  def goodbye

    puts "It was great to meet you! Don't forget to follow me on instagram"

  end

end # class Person

# We can make 'derived' or 'child' classes from our 'base' or 'parent' class Person
#i.e A comedian is a kind of Person; Comdians should be able to do everything
# that a person can do (same methods, same data).. but also a few extra things
# The '<' symbol in ruby means that a class inherits all the features of another class.

  class Comedian < Person

    # Define a custom version of the hello method for comedians - Comedian objects
    # will use this version instead of the parent version
    #This is called an 'overriding' the method from the base class.
    def hello
      # 'super' will run the superclass (parent class) version of whatever
      # method it appears in.
      super
      puts "Check out my podcast!"

      #Also tell a joke when you say hello - i.e run another method
      # from the same class
      #self has the same role as 'this has in javascript' - it's how you talk abou the current object.
      #self.tell_joke

      tell_joke # 'self' is implied

    end

    def tell_joke
      print "What's brown and sticky?"
      3.times do
        print '.'
        sleep 0.4
      end
      puts "A stick! HAHAHA!"

    end

end # class comedian

binding.pry
puts "stop here please"
