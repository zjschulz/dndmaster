class CampaignsController < ApplicationController

    def index
        render :json => Campaign.all
    end

    def destroy
        Campaign.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Campaign Deleted"}
    end

    def create
        user = User.find_by(id: params[:user_id])
        campaign = Campaign.create(name: params[:name], user: user)

        if campaign.id
            render json: {
                status: :created
            }
        else
            render json: {
                status: :error
            }
        end
    end

end