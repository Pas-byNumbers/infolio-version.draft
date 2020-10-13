Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes, only: %i[
        index
        show
        create
        update
        destroy
      ]

      resources :users, only: %i[
        index
        create
        profile
        update
        destroy
      ]
      
      get '/profile', to: 'users#profile'
    end
  end
  post '/login', to: 'sessions#create'
end