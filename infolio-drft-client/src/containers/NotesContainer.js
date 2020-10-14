import React from "react"
import { connect } from "react-redux"
import { fetchUserNotes } from "../actions/noteActions"

function NotesContainer() {

  

  return (
    <div>
      <h2>NOTES CONTAINER</h2>
    </div>
  )
}



export default connect(null, null)(NotesContainer)
