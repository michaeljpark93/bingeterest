class Api::BingesControllerController < ApplicationController
  before_action :require_logged_in

  def index
    @binges = Binge.all
    render "api/binges/index"
  end

  def show
    @binge = Binge.find(params[id])
    render "api/binges/show"
  end

  def create
    @binge = Binge.new(binge_params)
    @binge.user_id = current_user.id

    if @binge.save
      render "api/binges/show"
    else
      render json: @binge.errors.full_messages, status: 422
    end
  end

  def update
    @binge = current_user.binges.find(params[:id])

    if @binge
      if @binge.update_attributes(binge_params)
        render "api/binges/show"
      else
        render json: @binge.errors.full_messages, status: 422
      end
    else
      render json: ["You do not have permission to edit this binge."], status: 403
    end
  end

  def destroy
    @binge = current_user.binges.find(params[id])

    if @binge
      if @binge.destroy
        render "api/binges/show"
      else
        render json: ["Could not delete this binge"], status: 404
      end
    else
      render json: ["You do not have permission to delete this binge."], status: 403
    end 
  end

  private

  def binge_params
    params.require(:binge).permit(:title, :description, :url, :link_url, :author_id)
  end
end
