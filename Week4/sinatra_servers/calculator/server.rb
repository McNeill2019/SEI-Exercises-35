require 'sinatra'
require 'sinatra/reloader'

#ensures sinatra initialises This is all that is required to technically run the server (but it won't do anything or respond to anything).To run the server, we just use Ruby to run the file from our terminal - ruby main.rb. Normally this will run a server at localhost:4567.


#In Sinatra, a route is an HTTP method paired with a URL path pattern. Each route has a block.

get "/" do   #"/" is the URL path pattern, the pattern which the URL must match.
  #This is the block of code
  erb :intro #Links to the erb intro view.
end

# Match any URL of the form:
# /calc/123/+/456
get "/calc/:first/:op/:second" do
  # This is a dynamic path. We use named parameters rather than literal paths. Whatever is matched by the thing prefixed with the colon is stored in the a hash called params (which is automatically generated for us).

  @first = params[:first].to_f
  @second = params[:second].to_f
  @op = params[:op]

  #Here we store the params in instance variables with an @.

  ## long way:
  # if @op == '+'
  #   @result = @first + @second
  # elsif @op == '-'
  #   @result = @first - @second
  # elsif @op == '*'
  #   @result = @first * @second
  # elsif @op == 'div'
  #   @result = @first / @second
  # else
  #   @result = 'invalid calculation'
  # end

  @result = case @op
  when '+'   then @first + @second
  when '-'   then @first - @second
  when '*'   then @first * @second
  when 'div' then @first / @second
  else
    @result = 'invalid calculation'
  end

  #We then do a conditional case check on the operation to perform.

  # mind-blown.gif
  # @result = @first.send( @op, @second )

  erb :calculator #links to the calculator.erb form where we display the result.
end


# Form-based calculator

# Show blank form
get "/calc" do
  erb :form
end

#Paths like /calc are literal paths. They require the request to be a literal match with a path specified in a route - we actually have to visit /cats in order for our web server to respond to the request - this is annoying because we don't always know what we are going to receive from the client, and requires us to create routes for every single resource.

# Form submits to this route
get "/calc/result" do

  @first = params[:firstnum].to_f
  @second = params[:secondnum].to_f
  @op = params[:operator]
  #stores the parameters from the form.

  @result = @first.send( @op, @second )

  # Turn params hash into string
  # and send it to the browser
  # (debugging only!)
  # params.inspect

  # Reuse our previous template
  # (works because our variable names
  # are the same in this block)
  erb :calculator
end
