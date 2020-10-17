class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :user_id, :comments, :created_at, :updated_at
end
