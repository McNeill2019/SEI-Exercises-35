class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|

      #rails automatically gives us an integer :id field which will be the primary key for the table. It is not optional.
      #auto-increments. It's not optional.

      t.string :name # a string column for the planet's name
      t.text :image # a longer text column for the image URL
      t.float :orbit # a float for the orbit time (relative to earth)
      t.float :diameter
      t.float :mass
      t.integer :moons

      # The above saves us from writing an SQL statement.
      # like 'CREATE TABLE planets ( name TEXT,...)' in SQL.
      # and because it's ruby code, it's an abstraction away from any specific database format and it can be translated in to any specific format.


    end
  end
end
