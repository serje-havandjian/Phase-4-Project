class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review
      t.integer :rating
      t.integer :destination_id

      t.timestamps
    end
  end
end
