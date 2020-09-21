class CharactersController < ApplicationController

    def index
        render :json => Character.all
    end

    def destroy
        Character.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Character Deleted"}
    end

    def create
        user = User.find_by(id: params[:user_id])
        campaign = Campaign.find_by(id: params[:campaign_id])
        character = Character.create(name: params[:name], user: user, campaign: campaign)

        if character.id
            render json: {
                status: :created
            }
        else
            render json: {
                status: :error
            }
        end
    end

    def update
    end

end
