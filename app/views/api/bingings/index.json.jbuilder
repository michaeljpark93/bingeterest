@bingings.each do |binging|
  json.set! binging.id do
    json.extract! binging, :board_id, :binge_id
  end
end
