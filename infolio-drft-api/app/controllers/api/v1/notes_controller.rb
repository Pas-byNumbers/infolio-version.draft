class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @notes = Note.where(user_id: current_user.id)
    render json: { notes: NoteSerializer.new(@notes) },
           status: :ok
  end

  def show
    render json: { note: NoteSerializer.new(@note) },
           status: :ok
  end

  def create
    @note = Note.create(note_params)
    if @note.valid?
      render json: { note: NoteSerializer.new(@note) },
             status: :created
    else
      render json: { message: "failed to create note" },
             status: :not_acceptable
    end
  end

  def update
    if @note.update(note_params)
      render json: { user: NoteSerializer.new(@note) },
             status: :accepted
    else
      render json: { message: "failed to update note" },
             status: :not_acceptable
    end
  end

  def destroy
    if @note.destroy
      head :no_content,
           status: :ok
    else
      render json: { message: "failed to delete note" },
             status: :not_acceptable
    end
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

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
