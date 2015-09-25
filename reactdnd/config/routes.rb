Rails.application.routes.draw do
  resources :feats
  resources :characters
  root to: 'visitors#index'
end
