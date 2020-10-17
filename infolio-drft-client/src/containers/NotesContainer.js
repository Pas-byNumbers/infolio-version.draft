import React, { useEffect } from "react"
import { connect } from "react-redux"
import NoteCard from "../components/NoteCard"
import { fetchUserNotes } from "../actions/noteActions"
import { formatDateTime } from "../utilityExports/formatDateTime.js"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    margin: 15,
    // maxWidth: 200
  }
});

function NotesContainer(
  { 
    fetchUserNotes,
    notes 
  }
) {

const classes = useStyles()

    useEffect(() => {
      fetchUserNotes()
    }, [])


  return (
    <div>
      <h2>NOTES CONTAINER</h2>
      <div className={classes.root}>
        {
          notes.map(note => (
      <NoteCard 
        title={note.attributes.title}
        content={note.attributes.content}
        createdDateTime={formatDateTime(note.attributes.created_at)}
        updatedDateTime={formatDateTime(note.attributes.updated_at)}
      />
    ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.note.userNotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserNotes: () => dispatch(fetchUserNotes())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
