Rails.application.routes.draw do
  
  root to: "static#home"
  #static root made for testing purposes
  resources :sessions, only: [:create]
  resources :users, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

end
