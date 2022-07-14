class DestinationsController < ApplicationController

    def index
        destinations = Destination.all
        render json: destinations, include: "*.*"
    end

    def show
        destination = Destination.find(params[:id])
        render json: destination, include: "*.*"
    end

    def create
        destination = Destination.create(destination_params)
        render json: destination
    end

    private

    def destination_params
        params.permit(:location, :user_id, :state_id)
    end

end
