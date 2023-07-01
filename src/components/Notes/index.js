import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  BgCon,
  Form,
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

  let finalResult = noResultFound()

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
    setTitle('')
    setText('')
    setNewNote(prevNotesList => [...prevNotesList, newNotes])
    console.log(notesList)
  }

  const sendNotesData = () => (
    <UnOrderListCon>
      {notesList.map(eachNote => (
        <NoteItem NotesDetails={eachNote} key={eachNote.id} />
      ))}
    </UnOrderListCon>
  )

  if (notesList.length !== 0) {
    finalResult = sendNotesData()
  }

  return (
    <BgCon>
      <Form onSubmit={onAddNewNotes}>
        <Title>Notes</Title>
        <TextCon>
          <TitleInput
            placeholder="Title"
            value={titleInput}
            onChange={onAddTitle}
          />
          <TextArea
            placeholder="Take a Note"
            rows="6"
            value={textInput}
            onChange={onAddTakeNote}
          />
          <AddButton>Add</AddButton>
        </TextCon>
      </Form>
      {finalResult}
    </BgCon>
  )
}

export default Notes
