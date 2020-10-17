class CreateJoinTableNoteComment < ActiveRecord::Migration[6.0]
  def change
    create_join_table :notes, :comments do |t|
      # t.index [:note_id, :comment_id]
      # t.index [:comment_id, :note_id]
    end
  end
end
