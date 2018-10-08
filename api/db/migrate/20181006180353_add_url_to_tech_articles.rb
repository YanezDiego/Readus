class AddUrlToTechArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :tech_articles, :url, :string
  end
end
