class Follow < ApplicationRecord
  validates :user_id, :follower_id, presence: true
  validates :follower_id, uniqueness: {scope: :user_id}

  belongs_to :follower,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :followed_user,
    foreign_key: :follower_id,
    class_name: :User

end
