class Api::BingingsController < ApplicationController

  def create
    @binging = binging.new(binging_params)

    if @binging.save
      @binge = @binging.binge
      render 'api/binges/show.json.jbuilder'
    else
      render json: @binging.errors.full_messages, status: 400
    end
  end

  def destroy
    @binging = Binging.where(board_id: params[:binging][:board_id], binge_id: params[:binging][:binge_id]).first
    @board = @binging.board
    @binge = @binging.binge
    if @binging.destroy
      render 'api/bingings/show.json.jbuilder'
    else
      render json: @binging.errors.full_messages, status: 422
    end
  end

  private

  def binging_params
    params.require(:binging).permit(:board_id, :binge_id)
  end
end
