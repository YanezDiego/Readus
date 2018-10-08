Rails.application.routes.draw do
  # post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :tech_articles, only: [:create, :index], path: '/techs'
end
