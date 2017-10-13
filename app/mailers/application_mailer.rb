class ApplicationMailer < ActionMailer::Base
  default from: ENV["TIY_EMAIL"]
  layout 'mailer'
end
