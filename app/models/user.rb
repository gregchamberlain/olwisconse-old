class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, pass)
    User.find_by_username(username)
    user && user.is_password?(pass) ? user : nil
  end

  attr_reader :password

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end
end
