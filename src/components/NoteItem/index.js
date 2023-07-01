import {ListItem, CardTitle, CardText} from './styledComponents'

const NoteItem = props => {
  const {NotesDetails} = props
  const {titleInput, textInput} = NotesDetails

  return (
    <ListItem>
      <CardTitle>{titleInput}</CardTitle>
      <CardText>{textInput}</CardText>
    </ListItem>
  )
}

export default NoteItem
