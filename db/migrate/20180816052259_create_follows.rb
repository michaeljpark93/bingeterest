class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :follower_id, null: false

      t.timestamps
    end
    add_index :follows, [:follower_id, :user_id], unique: true
    add_index :follows, :user_id
  end
end
