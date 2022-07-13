class StatesController < ApplicationController

    def index
        states = State.all
        render json: states, include: ['destinations', 'destinations.reviews'], status: :ok
    end

    def show
        state = State.find(params[:id])
        render json: state, status: :ok
    end

end
