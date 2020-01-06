class CalculatorController < ApplicationController

  def home
  end

  def do_calculation
    @first = params[:first_num].to_f
    @second = params[:second_num].to_f
    @op = params[:operation]
    # stores the parameters from the form.

    # Because 1 + 2 in Ruby is 1.+(2), which you can write as: 1.send('+',2)
    @result = @first.send( @op, @second )
  end


end
