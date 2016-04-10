class UserController < ApplicationController
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json {render action: 'index', status: :ok}
    end
  end
end
