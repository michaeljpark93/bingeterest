class Api::FollowsController < ApplicationController
  def index
    @user = User.find_by_id(params[:user_id])
    render :index
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id

    if @follow.save
      render 'api/follows/create'
    else
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def destroy
    @follow = Follow.find_by_id(params[:id])

    if @follow.user_id == current_user.id
      @follow.destroy
      render 'api/follows/create'
    else
      render json: ["You cannot unfollow this user"], status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :follower_id)
  end
end
