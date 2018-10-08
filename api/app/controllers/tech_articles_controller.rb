class TechArticlesController < ApplicationController

  def create
    tech = TechArticle.new(tech_params)
      if tech.save
        render json: tech
      end
  end


  def index
    render json: TechArticle.all
  end


  private

  def tech_params
    params.require(:tech).permit(:title, :abstract, :byline, :published_date, :url)
  end


end
