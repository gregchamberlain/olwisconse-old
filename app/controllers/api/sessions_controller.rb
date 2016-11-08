class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_username(user_params[:username])
    if !@user
      render json: ["Invalid Username"], status: 404
    else
      if @user.is_password?(user_params[:password])
        login(@user)
        render :show
      else
        render json: ["Invalid Password"], status: 400
      end
    end
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
