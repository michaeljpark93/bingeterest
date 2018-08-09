@binges.each do |binge|
  json.set! binge.id do
    json.partial! 'binge', binge: binge
  end
end
