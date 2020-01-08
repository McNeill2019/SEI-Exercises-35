Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #CREATE


  #READ
  #1. Index of Artists

  get '/artists' => 'artists#index'

  #2. Show page for a single artist details

  get 'artists/:id' => 'artists#show', as: 'artist'

  #UPDATE


  #DELETE


end
