class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :salutation, limit: 15
      t.string :fullname, limit: 128
      t.string :username, limit: 128
      t.string :gender, limit: 15
      t.string :mobile, limit: 15
      t.string :email, limit: 180
      t.string :password_digest
      t.text   :primary_address
      t.bigint :created_by
      t.boolean :is_premium, default: false
      t.boolean :is_call_verified, default: false
      t.datetime :last_login_at
      t.string :status, limit: 15
      t.string :password_reset_token
      t.datetime :password_reset_sent_at

      t.timestamps
    end
  end
end
