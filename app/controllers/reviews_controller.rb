class ReviewsController < ApplicationController

    def show
        review = Review.find_by!(destination_id: params[:destination_id])
        render json: review
    end

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy 
        review = find_review
        review.destroy
        head :no_content
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:review, :rating, :destination_id, :user_id)
    end

end
