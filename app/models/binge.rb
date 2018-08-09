class Binge < ApplicationRecord
  validates :url, :link_url, :author_id, presence: true
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :Users
end
