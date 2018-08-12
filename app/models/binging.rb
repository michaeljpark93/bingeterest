class Binging < ActiveRecord::Base
  validates :binge, :board, presence: true

  belongs_to :binge

  belongs_to :board
end
