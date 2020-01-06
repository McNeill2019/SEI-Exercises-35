class MoviesController < ApplicationController

  def form
  end

  def lookup_movie

    @movie = params[:movie_name]

    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@movie}"

    response = HTTParty.get(url)

    @results = response["results"]

    # @title = response["results"].first["title"]
    #
    # @overview = response["results"].first["overview"]
    #
    # @popularity = response["results"].first["popularity"]
    #
    # @poster = response["results"].first["poster_path"]
    #
    #
    # @all = response["results"].each do |movie|
    #        puts movie['original_title']
    #      end

  end

end
