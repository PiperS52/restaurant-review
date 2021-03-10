# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
https://www.youtube.com/watch?v=oyjzi837wME

## Details for this project
- Databases:
1. restaurant-review_development
2. restaurant-review_test

## Setup
### New project
```
$ rails new [app-name] --webpacker=react --database=postgresql
```
### Database
```
$ rails db:create
$ rails g model [table-name] [table-attributes]
```
### Creating new model/table
```
$ rails g model [Model] [attribute(default is string)] [relationships(if any)]
e.g. $ rails g model Review title description score:integer airline:belongs_to

$ rails db:migrate
$ rake db:migrate RAILS_ENV=test
```
- add 'has_many :reviews' to Airlines model 
### Change tables
- Adding cols
```
$ bin/rails generate migration Add[Colname]To[Table] [col]:string
$ e.g. bin/rails generate migration AddPartNumberToProducts part_number:string
```
- Deleting cols
```
$ bin/rails generate migration Remove[Colname]From[Table] [col]:string
$ e.g. bin/rails generate migration RemovePartNumberFromProducts part_number:string
