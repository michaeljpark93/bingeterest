class Binge < ApplicationRecord

  include PgSearch
  multisearchable :against => [:description]
  pg_search_scope :search_by_description, against: :description, using: {tsearch: {prefix: true} }

  validates :url, :link_url, :author, presence: true

  validate :ensure_photo

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :bingings, dependent: :destroy

  has_many :boards,
    through: :bingings,
    source: :board

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
