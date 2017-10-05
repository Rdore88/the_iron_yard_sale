Rails.application.routes.draw do
  get '/*path' => 'reactmounts#mount'
  root :to => 'reactmounts#mount'
end
