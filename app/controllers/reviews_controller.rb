class ReviewsController < ApplicationController

    def show
        review = Review.find_by(destination_id: params[:destination_id])
        render json: review
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:review, :rating, :destination_id, :user_id)
    end

end
