class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :review
      t.integer :rating
      t.integer :state_id
      t.integer :tourist_id

      t.timestamps
    end
  end
end
