class Board < ApplicationRecord

  include PgSearch
  multisearchable :against => [:name, :description, :category]

  validates :user, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :bingings, dependent: :destroy

  has_many :binges,
    through: :bingings,
    source: :binge
end
