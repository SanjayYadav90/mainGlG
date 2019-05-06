# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_01_095946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "title", limit: 80
    t.text "description"
    t.string "cream_level", limit: 50
    t.boolean "status", default: false
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "salutation", limit: 15
    t.string "fullname", limit: 128
    t.string "username", limit: 128
    t.string "gender", limit: 15
    t.string "mobile", limit: 15
    t.string "email", limit: 180
    t.string "password_digest"
    t.text "primary_address"
    t.bigint "created_by"
    t.boolean "is_premium", default: false
    t.boolean "is_call_verified", default: false
    t.datetime "last_login_at"
    t.string "status", limit: 15
    t.string "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
