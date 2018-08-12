class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|

      t.timestamps
    end
  end
end
