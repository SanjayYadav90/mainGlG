class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title, limit: 80
      t.text :description
      t.string :cream_level, limit: 50
      t.boolean :status, default: false
      t.integer :user_id

      t.timestamps
    end
  end
end
