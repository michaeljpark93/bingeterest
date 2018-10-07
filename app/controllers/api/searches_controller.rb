class Api::SearchesController < ApplicationController

  def index
    query = params[:query]
    @search_results = {}
    @search_results[:binges] = Binge.whose_title_starts_with(query)
    @search_results[:boards] = Board.whose_title_starts_with(query)
    @search_results[:users] = User.whose_username_starts_with(query)
    render 'api/searches/show'
  end

end
