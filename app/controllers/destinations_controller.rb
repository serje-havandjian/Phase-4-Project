class DestinationsController < ApplicationController

    def index
        destinations = Destination.all
        render json: destinations
    end

    def show
        destination = Destination.find(params[:id])
        render json: destination
    end

    def create
        destination = Destination.create(destination_params)
        render json: destination
    end

    def summary
        destination = Destination.find(params[:id])
        render json: destination, serializer: ReviewWithUsernameSerializer
    end

    private

    def destination_params
        params.permit(:location, :user_id, :state_id)
    end

end
