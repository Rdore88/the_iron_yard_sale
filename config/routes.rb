Rails.application.routes.draw do

  scope 'api' do
    resources :users, only: [:create]
    resources :items
    resources :orders
    put 'subtract_quantity/:id', :to => 'items#subtract_quantity'
    put 'add_quantity/:id', :to => 'items#add_quantity'
    get 'confirm_order/:id', :to => 'orders#confirm_order'
  end

  get '/*path' => 'reactmounts#mount'
  root :to => 'reactmounts#mount'
end
