class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :age, numericality: { greater_than_or_equal_to: 13}

  after_initialize :ensure_session_token

  has_many :binges,
    foreign_key: :author_id,
    class_name: :Binge

  has_many :boards,
    foreign_key: :user_id,
    class_name: :Board

  has_many :bingings,
    through: :boards,
    source: :binges

  has_many :user_followees,
    foreign_key: :user_id,
    class_name: :Follow

  has_many :user_followers,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :user_followees,
    source: :follower

  has_many :followees,
    through: :user_followers,
    source: :followee

  has_one_attached :photo

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end
end
