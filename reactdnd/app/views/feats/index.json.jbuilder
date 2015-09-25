json.array!(@feats) do |feat|
  json.extract! feat, :id, :name, :effect
  json.url feat_url(feat, format: :json)
end
