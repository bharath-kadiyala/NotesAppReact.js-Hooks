import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  BgCon,
  NoteCon,
  Title,
  TextCon,
  TitleInput,
  TextArea,
  AddButton,
  UnOrderListCon,
  NoResultCon,
  Image,
  NoResultTitle,
  NoResultSubTitle,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitle] = useState('')
  const [textInput, setText] = useState('')
  const [notesList, setNewNote] = useState([])

  const onAddTitle = event => {
    setTitle(event.target.value)
  }

  const onAddTakeNote = event => {
    setText(event.target.value)
  }

  const onAddNewNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidV4(),
      titleInput,
      textInput,
    }

    setNewNote(prevNotesList => [...prevNotesList, newNotes])
    setTitle('')
    setText('')
  }

  console.log(notesList)

  const noResultFound = () => (
    <NoResultCon>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoResultTitle>No Notes Yet</NoResultTitle>
      <NoResultSubTitle>Notes you add will appear here</NoResultSubTitle>
    </NoResultCon>
  )

  const sendNotesData = () => (
    <UnOrderListCon>
      {notesList.map(eachNote => (
        <NoteItem notesDetails={eachNote} key={eachNote.id} />
      ))}
    </UnOrderListCon>
  )

  return (
    <BgCon>
      <NoteCon>
        <Title>Notes</Title>
        <TextCon onSubmit={onAddNewNotes}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={titleInput}
            onChange={onAddTitle}
          />
          <TextArea
            type="text"
            placeholder="Take a Note..."
            rows="6"
            value={textInput}
            onChange={onAddTakeNote}
          />
          <AddButton>Add</AddButton>
        </TextCon>
        {notesList.length === 0 ? noResultFound() : sendNotesData()}
      </NoteCon>
    </BgCon>
  )
}

export default Notes
