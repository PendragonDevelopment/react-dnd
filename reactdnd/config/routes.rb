# == Route Map
#
#           Prefix Verb   URI Pattern                                    Controller#Action
#            feats GET    /feats(.:format)                               feats#index
#                  POST   /feats(.:format)                               feats#create
#         new_feat GET    /feats/new(.:format)                           feats#new
#        edit_feat GET    /feats/:id/edit(.:format)                      feats#edit
#             feat GET    /feats/:id(.:format)                           feats#show
#                  PATCH  /feats/:id(.:format)                           feats#update
#                  PUT    /feats/:id(.:format)                           feats#update
#                  DELETE /feats/:id(.:format)                           feats#destroy
# character_images POST   /characters/:character_id/images(.:format)     images#create
#  character_image PATCH  /characters/:character_id/images/:id(.:format) images#update
#                  PUT    /characters/:character_id/images/:id(.:format) images#update
#                  DELETE /characters/:character_id/images/:id(.:format) images#destroy
#       characters GET    /characters(.:format)                          characters#index
#                  POST   /characters(.:format)                          characters#create
#    new_character GET    /characters/new(.:format)                      characters#new
#   edit_character GET    /characters/:id/edit(.:format)                 characters#edit
#        character GET    /characters/:id(.:format)                      characters#show
#                  PATCH  /characters/:id(.:format)                      characters#update
#                  PUT    /characters/:id(.:format)                      characters#update
#                  DELETE /characters/:id(.:format)                      characters#destroy
#             root GET    /                                              visitors#index
#

Rails.application.routes.draw do
  resources :feats
  resources :characters do
    resources :images, only: [:create, :update, :destroy]
  end
  root to: 'visitors#index'
end
