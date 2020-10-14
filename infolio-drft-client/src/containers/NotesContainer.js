import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUserNotes } from "../actions/noteActions"

function NotesContainer() {

  useEffect(() => {
    fetchUserNotes()
  })

  return (
    <div>
      <h2>NOTES CONTAINER</h2>
    </div>
  )
}



export default connect(null, {
  fetchUserNotes
})(NotesContainer)
