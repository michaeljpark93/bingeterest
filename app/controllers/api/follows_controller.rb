class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @user = User.find(@follow.user_id)

    if @follow.save
      render 'api/users/show.json.jbuilder'
    else
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def destroy
    @follow = Follow.where(user_id: params[:follow][:user_id], follower_id: params[:follow][:follower_id]).first
    @user = User.find(@follow.user_id)

    if @follow.destroy
      render 'api/users/show.json.jbuilder'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :follower_id)
  end
end
