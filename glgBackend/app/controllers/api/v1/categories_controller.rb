class Api::V1::CategoriesController < ApplicationController
	
	before_action :authorize_request
	before_action :find_category, except: %i[create index]

  def create
  	@category = @current_user.categories.create(category_params)
    if @category.save
      render json: @category, status: :created
    else
      render json: { errors: @category.errors }, status: :unprocessable_entity
    end
  end

  def index
    @categories = Category.all
    render json: @categories, status: :ok
  end

  def show
	    render json: @category, status: :ok
  end

  def update
  	if @category.update(category_params)
      render json: { message: 'Update successfully.', category: @category }, status: :ok
    else
      render json: { errors: @category.errors }, status: :unprocessable_entity
    end
  end

  def destroy
  	if @category.destroy
  		render json: {message: 'deleted successfully!'}, status: :ok
  	else
  		render json: { errors: @category.errors }, status: :unprocessable_entity
  	end

  end

  private

  def find_category
    @category = Category.find_by_id(params[:id])
    render json: {errors: {category: 'not found'} }, status: :not_found unless @category
  end

  def category_params
  	params.require(:category).permit(:title, :description, :cream_level, :status)
  end

end
