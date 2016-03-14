class UserController < ApplicationController
  def index
    @users = User.all
    respond_to do |format|
      format.json {render action: 'index', status: :ok}
    end
  end

  def show
  end

  def user_params
      params.require(:user).permit(:name, :age)
    end
end
