# new rails
$ rails new MySite

#bundling
$bundle install

#running server
rails server

#create new controller
rails generate controller Pages
#edit routes->controller->page

#create new model
rails generate model Message
#file in db/migrate

#migration
rake db:migrate

#seeder
rake db:seed

##penulisan
#show content model
<% @messages.each do |t| %>
	<h1>name: <%= t.name %></h1><br>
	description: <%= t.description %>
<% end %>

#show image
<%= image_tag t.image %>

#show link
<%= link_to "Learn more", tag_path(t) %>

#controller
def messages
	#show all field database
	@messages = Message.all

	#show field database with id
	def show
		@tag = Tag.find(params[:id])
		@destinations = @tag.destinations
	end

	#edit
	def update
		@destination = Destination.find(params[:id])
		if @destination.update(destination_params)
			redirect_to @destination
		else
			render 'edit'
		end
	end
	private 
	  	def destination_params 
	    	params.require(:destination).permit(:name, :description) 
	  	end
end


#model
class Tag < ActiveRecord::Base
	has_many :destinations
	belongs_to :tag
end

#routes
Rails.application.routes.draw do
	get '/tags' => 'tags#index'
	post '/tags/create' => 'tags#create'
	get '/tags/:id' => 'tags#show', as: :tag
end

#db:migrate
class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
			t.string :name
			t.string :image
			t.string :description
			t.references :tag
      t.timestamps
    end
  end
end

