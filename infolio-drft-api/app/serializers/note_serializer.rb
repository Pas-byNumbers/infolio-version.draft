class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :user_id
end
