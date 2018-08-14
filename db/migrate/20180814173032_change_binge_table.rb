class ChangeBingeTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :binges, :title
  end
end
