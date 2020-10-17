class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }, presence: true
  validates :email, uniqueness: true, presence: true
  has_many :notes, dependent: :destroy
  has_many :comments, through: :notes, dependent: :destroy
end
