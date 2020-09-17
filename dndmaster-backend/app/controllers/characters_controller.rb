class CharacterController < ApplicationController

    def index
        render :json => Character.all
    end

    def destroy
        Character.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Character Deleted"}
    end

    def create
    end

    def update
    end

end
