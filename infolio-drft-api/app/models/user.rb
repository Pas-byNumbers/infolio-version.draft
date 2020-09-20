class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: true }
  validates :email, uniqueness: true
end
