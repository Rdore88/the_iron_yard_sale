Rails.application.routes.draw do

  scope 'api' do
    resources :users, only: [:create]
    resources :items
    put 'change_quantity/:id', :to => 'items#change_quantity'
  end

  get '/*path' => 'reactmounts#mount'
  root :to => 'reactmounts#mount'
end
