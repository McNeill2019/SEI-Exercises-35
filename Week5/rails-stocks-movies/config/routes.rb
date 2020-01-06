Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # STOCKS

  # 1. Blank form

  get '/stocks' => 'stocks#form'

  # 2. Form submits here, does stock lookup, prints results

  get '/stocks/lookup' => 'stocks#do_lookup'

  # 1. Blank form

  get '/movies' => 'movies#form' #controller/action(method)

  # 2. Form submits here, does stock lookup, prints results

  get '/movies/lookup' => 'movies#lookup_movie'

  # 3. Details page(show page)for a single result
  get '/movies/results/:id' => 'movies#movie_info'

end
