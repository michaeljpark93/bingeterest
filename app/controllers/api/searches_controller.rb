class Api::SearchesController < ApplicationController

  def index
    query = params[:query]
    @search_results = {}
    @search_results[:binges] = Binge.search_by_description(query)
    @search_results[:users] = User.search_by_username(query)
    @search_results[:boards] = Board.search_by_description(query)
    render 'api/searches/show'
  end

end
