class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text, :note_id, :user_id, :created_at, :updated_at
end
