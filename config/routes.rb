Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    post 'session' => 'sessions#create'
    delete 'session' => 'sessions#destroy'
  end

  get '*path' => 'static_pages#index'
end
