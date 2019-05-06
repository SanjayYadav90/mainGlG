Rails.application.routes.draw do

	namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
  		post '/auth/login', to: 'authentication#login'
      resources :users, param: :_username
  		resources :categories
    end
  end
  get '/*a', to: 'application#not_found'

end
