class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    @comment = Comment.where(user_id: current_user.id)
    render json: {comments: CommentSerializer.new(@comment) },
           status: :ok
  end

  def show
    render json: { comment: CommentSerializer.new(@comment) },
           status: :ok
  end

  def create
    @comment = Comment.create(comment_params)
    if @comment.valid?
      render json: { comment: CommentSerializer.new(@comment) },
             status: :created
    else
      render json: { message: "failed to create comment" },
             status: :not_acceptable
    end
  end

  def update
    if @comment.update(comment_params)
      render json: { comment: CommentSerializer.new(@comment) },
             status: :accepted
    else
      render json: { message: "failed to update comment" },
             status: :not_acceptable
    end
  end

  def destroy
    if @note.destroy
      head :no_content,
           status: :ok
    else
      render json: { message: "failed to delete comment" },
             status: :not_acceptable
    end
  end

  private

  def set_comment
    @note = Comment.find(params[:id])
  end

  def comment_params
    params
      .require(:comment)
      .permit(
        :text,
        :note_id,
        :user_id
      )
  end
end
