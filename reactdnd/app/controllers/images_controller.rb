class ImagesController < ApplicationController
    def create
      @character = Character.find(params[:id])
      @image = @character.images.new(image_params)

      if @image.save
        # This is a holdover from stuff I've previously done, but
        #    it may be useful
        render json: { message: 'success', fileID: @image.id }, status: 200
      else
        render json: { error: @image.errors.full_messages.join(',') }, status: 400
      end
    end

    def update
      @character = Character.find(params[:id])
      @image = Image.find(params[:image_id])

      if @image.update(image_params)
        flash[:success] = 'Image updated'
        redirect_to character_path(@character)
      else
        flash[:danger] = 'Image could not be updated'
        redirect_to character_path(@character)
      end
    end

    def destroy
      @character = Character.find(params[:id])
      @image = Image.find(params[:image_id])

      if @image.destroy
        flash[:success] = 'Image deleted'
        redirect_to character_path(@character)
      else
        flash[:danger] = 'Image could not be deleted'
        redirect_to character_path(@character)
      end
    end

    private

    def image_params
      params.require(:image).permit(:image)
    end
  end