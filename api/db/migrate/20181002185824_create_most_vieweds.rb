class CreateMostVieweds < ActiveRecord::Migration[5.2]
  def change
    create_table :most_vieweds do |t|
      t.string :title
      t.string :abstract
      t.string :url
      t.integer :total_shares
      t.date :published_date
      t.timestamps
    end
  end
end
