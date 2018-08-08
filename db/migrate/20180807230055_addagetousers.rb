class Addagetousers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :age, :integer
  end
end
