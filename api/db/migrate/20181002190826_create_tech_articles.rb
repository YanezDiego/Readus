class CreateTechArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :tech_articles do |t|
      t.string :title
      t.string :abstract
      t.string :byline
      t.date :published_date
      t.timestamps
    end
  end
end
