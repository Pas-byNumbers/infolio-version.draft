class Api::V1::UsersController < ApplicationController
  def index
    @users = User.order(:id)
    render json: { users: UserSerializer.new(@users) }, 
    status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, 
      status: :accepted
    else
      render json: { error: 'failed to create user' }, 
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
