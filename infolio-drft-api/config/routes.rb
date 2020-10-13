Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes, only: %i[
        index
        show
        create
      ]

      resources :users, only: %i[
        index
        create
        profile
      ]
      
      get '/profile', to: 'users#profile'
    end
  end
  post '/login', to: 'sessions#create'
end