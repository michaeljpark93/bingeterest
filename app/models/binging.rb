class Binging < ActiveRecord::Base
  validates :binge, :board, presence: true

  belongs_to :binge,
    foreign_key: :binge_id,
    class_name: :Binge

  belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board
end
