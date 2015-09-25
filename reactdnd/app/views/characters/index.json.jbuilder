json.array!(@characters) do |character|
  json.extract! character, :id, :name, :bio, :traits, :race, :class, :gender, :alignment
  json.url character_url(character, format: :json)
end
