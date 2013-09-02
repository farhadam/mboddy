json.array!(@users) do |user|
  json.extract! user, :name, :email, :username, :password
  json.url user_url(user, format: :json)
end
