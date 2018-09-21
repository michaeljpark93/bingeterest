class Follow < ApplicationRecord
  validates :follower, :followee, presence: true
  validates :follower_id, uniqueness: {scope: :user_id}

  belongs_to :followee,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

end
