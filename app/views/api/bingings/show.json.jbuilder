json.board do
  json.binges do
    @board.binges.each do |binge|
      json.set! binge.id do
        json.partial! 'api/binges/binge.json.jbuilder', binge: binge
      end
    end
  end
end
