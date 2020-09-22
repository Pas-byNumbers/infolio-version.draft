class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: %i[create]

  def index
    @users = User.order(:id)
    render json: 
    { users: UserSerializer.new(@users) }, 
    status: :ok
  end

  def profile
    render json: 
    { user: UserSerializer.new(current_user) }, 
    status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = Auth.issue(user_id: @user.id)
      render json: 
      { user: UserSerializer.new(@user), jwt: @token }, 
      status: :created
    else
      render json: 
      { error: 'failed to create user' }, 
      status: :not_acceptable
    end
  end

  private

  def user_params
    params
      .require(:user)
      .permit(
        :username,
        :password,
        :first_name,
        :last_name,
        :email,
        :country
      )
  end
end
