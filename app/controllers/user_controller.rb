class UserController < ApplicationController
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json {render action: 'index', status: :ok}
    end
  end

  def show
  end

  def new
  @user = User.new(user_params)

  respond_to do |format|
  if @user.save
    render json: @user
  else
    format.json{ render json: @user.errors, status: :unprocessable_entity }
  end
end
end

  def user_params
      params.require(:user).permit(:name, :age)
    end
end
