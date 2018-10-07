class Board < ApplicationRecord

  include PgSearch
  multisearchable :against => [:name, :description, :category]
  pg_search_scope :search_by_description, against: :description, using: {tsearch: {prefix: true} }
  
  validates :user, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :bingings, dependent: :destroy

  has_many :binges,
    through: :bingings,
    source: :binge
end
