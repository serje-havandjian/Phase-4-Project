class ReviewsController < ApplicationController

    def show
        review = Review.find_by(destination_id: params[:destination_id])
        render json: review
    end

    def index
        reviews = Review.all
        render json: reviews
    end

end
