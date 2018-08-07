class CreateBinges < ActiveRecord::Migration[5.1]
  def change
    create_table :binges do |t|
      t.string :title
      t.text :description
      t.string :url, null: false
      t.string :link_url, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :binges, :author_id
  end
end
