json.partial!('api/boards/board', board: @board)

json.bingings do
  @board.bingings.each do |binging|
    json.set! binging.id do
      json.id binging.id
      json.binge_id binging.binge_id
      json.board_id binging.board_id
    end
  end 
end
