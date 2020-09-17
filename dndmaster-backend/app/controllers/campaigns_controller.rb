class CampaignController < ApplicationController

    def index
        render :json => Campaign.all
    end

    def destroy
        Campaign.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Campaign Deleted"}
    end

    def create
    end

end