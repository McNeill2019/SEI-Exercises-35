
class PlanetsController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false
  #Bypass the automatic forms security checking done by Rails
  #...just for today.

  #CREATE

  #1. New blank form

  def new
  end

  #2. Form submit, create, redirect

  def create
    Planet.create(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      moons: params[:moons]
    )

    redirect_to( planets_path ) # /planets

  end

  #READ

  # 1. Index of planets
  def index
    @planets = Planet.all
  end

  # 2. Details page for one planet
  def show
    # Because of the '/planets/:id' route, we get access to the ID used in the URL in the params variable; so if the URL was /planets/25, the variable params[:id] will contain the string '25'
   @planet = Planet.find(params[:id])
  end


  #UPDATE

  #1. Pre-filled edit form

  def edit

    @planet = Planet.find (params[:id])

  end

  #2. Form submit, update DB, redirect

  def update

  planet = Planet.find (params[:id])
    planet.update(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      moons: params[:moons]
    )

    redirect_to planet_path(planet.id)
    #redirect to the show page: /planets/:id
  end

  #Destroy

  def destroy

    Planet.destroy params[:id]

    #redirect to the index
    redirect_to( planets_path )
  end

end
