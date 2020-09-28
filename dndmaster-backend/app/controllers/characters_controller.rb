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
        character = Character.create(name: params[:name], race: params[:race], character_class: params[:character_class], background: params[:background], level: params[:level], armor_class: params[:armor_class], perception: params[:perception], investigation: params[:investigation], insight: params[:insight], spell_save_dc: params[:spell_save_dc], user: user, campaign: campaign)

        if character.id
            render json: {
                status: :created,
                character: Character.all[-1]
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
