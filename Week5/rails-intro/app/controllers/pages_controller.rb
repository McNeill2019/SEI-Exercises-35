
class PagesController < ApplicationController

  def funny
  end


  def information
  end

  def say_hello_to
    p params
    puts "The recipient is : #{ params[:recipient] }"

    @hello_recipient = params[:recipient]

  end

end
