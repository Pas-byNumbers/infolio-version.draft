class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :user_id, :created_at, :updated_at
end
