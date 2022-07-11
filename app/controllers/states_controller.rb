class StatesController < ApplicationController

    def index
        states = State.all
        render json: states
    end


    def show
        state = State.find(params[:id])
        render json: state
    end

    def update

    end

    def destroy
        state = State.find(params[:id])
        state.destroy
        head :no_content

    end

end
