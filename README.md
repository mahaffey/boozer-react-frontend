# The Cocktail Wiki
#### Working at a bar and don't know how to make that obscure drink a customer asks for?

#### Looking to try out new recipes and contribute your own?

## Enter The Cocktail Wiki

## Demo
!['Cocktail Wiki'](./Demo.gif?raw=true)


## User Story
1.	Splash Page
  *	User logs in
2.	User can either:
  * Browse the cocktail list (alphabetical)
  * Use the search bar to look for a drink by name or ingredient
  * Contribute one of their own recipes to the database

## Set Up and Usage
1. Navigate to ./backend and run bundle install
  ```bash
  $ bundle install
  ```
2. Start PostgreSQL
3. Rails tasks
```bash
$ rails db:create
$ rails db:migrate
$ rails db:seed
```
4. Create User
  ```bash
  $ rails c

  > User.create({"username": "user", "password": "123"})
  >> COMMIT
  ```
4. Start up Backend server
  ```bash
  $ rails s
  ```
3. Navigate to ./frontend and run npm install
  ```bash
  $ npm install
  ```
4. Start Frontend with npm start.
  * You will likely have to input 'y' after returning this command to have the app start on a different server than the default server (3000)

  ```bash
  $ npm start
  ```
5. Navigate to Frontend localhost, in most cases it will be port 3001
6. Log in with created Username and Password in step 4.
7. Happy Mixing!

## Frameworks and Libraries

#### Client
* React
  * React DOM
  * React Router DOM
  * React Semantic UI
* Reactive JavaScript
* Semantic UI

#### Server
* Ruby on Rails
* postgreSQL

## This is Distributed under the MIT License 2017
