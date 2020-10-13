class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.where(user_id: note_params[:user_id])
    render json:
    { notes: NoteSerializer.new(@notes) },
    status: :ok
  end

  def show
    @note = Note.find(note_params[:id])
    render json:
    { note: NoteSerializer.new(@note) },
    status: :ok
  end

  def create
    @note = Note.new(note_params)
    if @note.create
      render json:
      { note: NoteSerializer.new(@note) },
      status: :created
    else 
      render json:
      { message: 'failed to create note' },
      status: :not_acceptable
    end
  end

  private

  def note_params
    params
    .require(:note)
    .permit(
      :title,
      :content,
      :user_id
    )
  end
end
