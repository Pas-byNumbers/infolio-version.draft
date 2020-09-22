Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[
        index
        create
      ]
      
      get '/profile', to: 'users#profile'
    end
  end
  post '/login', to: 'sessions#create'
end