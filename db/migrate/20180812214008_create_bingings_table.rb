class CreateBingingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :bingings do |t|
      t.integer :board_id, null: false
      t.integer :binge_id, null: false

      t.timestamps
    end
    add_index :bingings, [:binge_id, :board_id]
    add_index :bingings, :board_id
  end
end
