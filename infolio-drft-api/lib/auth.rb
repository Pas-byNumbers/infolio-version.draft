require "jwt"

class Auth
  def self.algorithm_type
    return "HS256"
  end

  def self.issue(payload)
    JWT.encode(
      payload,
      combination,
      algorithm_type
    )
  end

  def self.decode(token)
    begin
      JWT.decode(
        token,
        combination,
        true,
        algorithm: algorithm_type,
      )
    rescue JWT::DecodeError
      nil
    end
  end

  def self.combination
    ENV["S3SS10N_AUTH_S3CR3T"]
  end
end
