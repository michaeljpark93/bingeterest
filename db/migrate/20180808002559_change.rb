class Change < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :email
    remove_column :users, :age
    add_column :users, :age, :integer, null: false
  end
end
