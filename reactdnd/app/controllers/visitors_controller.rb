class VisitorsController < ApplicationController

  def index
    @character = {
      name: 'Steve',
      bio: 'This is my bio',
      traits: 'Bunch of traits'
    }
  end
  
end
