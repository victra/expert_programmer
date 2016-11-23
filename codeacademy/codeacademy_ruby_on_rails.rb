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

#add authentification
1. add gem 'bcrypt', '~> 3.1.7'
2. bundle install
3. add migrate
4. add signup
routes
get 'signup'  => 'users#new' 
resources :users

controller users
def new
  @user = User.new
end

def create 
  @user = User.new(user_params) 
  if @user.save 
    session[:user_id] = @user.id 
    redirect_to '/' 
  else 
    redirect_to '/signup' 
  end 
end

private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

erb
<h1>Sign up</h1>

<%= form_for(@user) do |f| %>
  <%= f.text_field :first_name, :placeholder => "First name" %>
  <%= f.text_field :last_name, :placeholder => "Last name" %>
  <%= f.email_field :email, :placeholder => "Email" %>
  <%= f.password_field :password, :placeholder => "Password" %>
  <%= f.submit "Create an account", class: "btn-submit" %>
<% end %>

check console%>
rails console
User.all

5. login

routes
get '/login' => 'sessions#new'
post 'login' => 'sessions#create'

controller session
def new
end
def create
  @user = User.find_by_email(params[:session][:email])
  if @user && @user.authenticate(params[:session][:password])
    session[:user_id] = @user.id
    redirect_to '/'
  else
    redirect_to 'login'
  end 
end

erb
<h1>Log in</h1>			
<%= form_for(:session, url: login_path) do |f| %> 
  <%= f.email_field :email, :placeholder => "Email" %> 
  <%= f.password_field :password, :placeholder => "Password" %> 
  <%= f.submit "Log in", class: "btn-submit" %>
<% end %>

%>
6.logout

routes
delete 'logout' => 'sessions#destroy'

controller session
def destroy 
  session[:user_id] = nil 
  redirect_to '/' 
end

7. add session

controller application_controller
helper_method :current_user 
def current_user 
  @current_user ||= User.find(session[:user_id]) if session[:user_id] 
end
def require_user 
  redirect_to '/login' unless current_user 
end

8. test required session on some page

albums_controller
before_action :require_user, only: [:index, :show]

9. add logout on layout application_controller
<% if current_user %> 
  <ul> 
    <li><%= current_user.email %></li> 
    <li><%= link_to "Log out", logout_path, method: "delete" %></li> 
  </ul> 
<% else %> 
  <ul> 
    <li><%= link_to "Login", 'login' %></a></li> 
    <li><%= link_to "Signup", 'signup' %></a></li> 
  </ul> 
<% end %>