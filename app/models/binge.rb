class Binge < ApplicationRecord
  validates :url, :link_url, :author_id, presence: true

  belongs_to :binger,
    foreign_key: :author_id,
    class_name: :User

  has_one_attached :binge
end
