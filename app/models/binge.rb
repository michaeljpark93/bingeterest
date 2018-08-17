class Binge < ApplicationRecord
  validates :url, :link_url, :author_id, presence: true

  validate :ensure_photo

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
