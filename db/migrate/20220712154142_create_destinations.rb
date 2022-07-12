class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :location
      t.integer :state_id
      t.integer :user_id

      t.timestamps
    end
  end
end
