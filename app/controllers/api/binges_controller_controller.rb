class Api::BingesControllerController < ApplicationController
  before_action :require_logged_in

  def index
    @binges = Binge.all
    render "api/binges/index"
  end

  def create
    @binge = Binge.new(binge_params)

    if @binge.save
      render "api/binges/show"
    else
      render json: @binge.errors.full_messages, status: 422
    end
  end

  private

  def binge_params
    params.require(:binge).permit(:title, :description, :url, :link_url, :author_id)
  end
end
