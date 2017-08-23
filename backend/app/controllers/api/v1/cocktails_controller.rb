require 'pry'
module Api
  module V1
    class CocktailsController < ApplicationController
      def index
        render json: Cocktail.all
      end

      def show
        render json: Cocktail.find(params[:id])
      end

      def create
        cocktail = Cocktail.create(name: cocktail_params[:cocktailName], description: cocktail_params[:cocktailDescription], instructions: cocktail_params[:cocktailInstructions], source: "Ryan & Terrance -FS '17")

        proportion_params[:cocktailProportions].each do |prop|
          if Ingredient.find_by(name: prop['ingredient'])
            newIngredient = Ingredient.find_by(name: prop['ingredient'])
            Proportion.create(ingredient: newIngredient, amount: prop['amount'], cocktail: cocktail)
          else
            newIngredient = Ingredient.create(name: prop['ingredient'])
            Proportion.create(ingredient: newIngredient, amount: prop['amount'], cocktail: cocktail)
          end
        end

      end

      def edit

      end

      def update

      end

      def destroy

      end

      private

      def cocktail_params
        params.require(:cocktail).permit(:cocktailName, :cocktailDescription, :cocktailInstructions)
      end

      def proportion_params
        params.require(:cocktail).permit(:cocktailProportions => [:ingredient, :amount])
      end

    end
  end
end
