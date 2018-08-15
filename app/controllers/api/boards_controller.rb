class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def show
    @board = Board.find_by_id(params[:id])
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id

    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find_by_id(params[:id])

    if @board.user_id == current_user.id
      if @board.update_attributes(board_params)
        render 'api/boards/show'
      else
        render json: @board.errors.full_messages, status: 422
      end
    else
      render json: ["You do not have permission to edit this board."], status: 403
    end
  end

  def destroy
    @board = Board.find_by_id(params[:id])

    if @board.user_id == current_user.id
      @board.destroy
      render 'api/boards/show'
    else
      render json: ["You do not have permission to delete this board."], status: 403
    end
  end

  private

  def board_params
    params.require(:board).permit(:name, :secret, :user_id)
  end
end
