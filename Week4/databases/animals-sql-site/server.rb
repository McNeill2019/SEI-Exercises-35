require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'  # to talk to our SQL database
require 'pry'

# DRY up our routes by creating a reusable DB query function
def db_query( sql )

  db = SQLite3::Database.new('database.db')
  db.results_as_hash = true #By default, SQL will retrieve arrays of results from the database, but we want the results to be returned as hashes.
  # Debugging output in the terminal:
  puts '======================='
  puts sql
  puts '======================='
  results = db.execute(sql) #Calls the 'execute' method on our database connection object, passing in the SQL query we want to execute.

  db.close #Once a response has been received, close the connection to the database, since we can only have a limited number of concurrent database connections.

  results   # return the result of the query
end


# Home page
get '/' do
  erb :home
end   #This is the home page for the site and links to the home.erb view.


# CREATE routes

# 1. Show the blank form to be filled out
get '/animals/new' do
  erb :new
end

# 2. Form data submits to here with a POST request.
post '/animals' do #/animals is written in the action section of the form heading.

  sql = "INSERT INTO animals (name, species, description, roundness, alive, age, image_url)
    VALUES (
      '#{ params[:name] }',
      '#{ params[:species] }',
      '#{ params[:description] }',
       #{ params[:roundness] },
       #{ params[:alive] },
       #{ params[:age]},
      '#{ params[:image_url]}'
    );"
 #sql query is saved in sql. The data entered in to the form is saved in to params.

    # executes the query using the master db_query function which sends the query to the database.
    db_query(sql)

    # redirect to the index page of animals - from there we can see the animal was added; and it also prevents a reload from re-inserting this animal to the DB
    redirect '/animals'
end

# READ routes

# 1. Index of all animals in table
get '/animals' do
  @results = db_query "SELECT * FROM animals;"
  erb :index
end

# 2. Details page for a single animal (row)
get '/animals/:id' do

  @animal = db_query("SELECT * FROM animals WHERE id = #{ params[:id] } ;")

  # We know there's only one row when we query by ID,
  # so just grab the first row from the array of results
  @animal = @animal.first

  erb :show
end


# UPDATE routes

# 1. Show pre-filled form
get '/animals/:id/edit' do

  # We need to get the details of the animal we're editing
  # so we can pre-fill the form with those details
  @animal = db_query("SELECT * FROM animals WHERE id = #{ params[:id] } ;")
  @animal = @animal.first

  erb :edit
end

# 2. Form submit, update the row
post '/animals/:id' do

  sql = "UPDATE animals SET
      name        = '#{ params[:name] }',
      species     = '#{ params[:species] }',
      description = '#{ params[:description] }',
      roundness   =  #{ params[:roundness] },
      alive       =  #{ params[:alive] },
      age         =  #{ params[:age]},
      image_url   = '#{ params[:image_url]}'
    WHERE id = #{ params[:id] };"

    # execute the query and ignore the result
    db_query(sql)

    redirect "/animals/#{ params[:id] }"
end


# DELETE route
get "/animals/:id/delete" do
  db_query ("DELETE FROM animals WHERE id = #{ params[:id] }")

  # No template to show, redirect to the index
  redirect "/animals"
end
