import {ListItem, CardTitle, CardText} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {titleInput, textInput} = notesDetails

  return (
    <ListItem>
      <CardTitle>{titleInput}</CardTitle>
      <CardText>{textInput}</CardText>
    </ListItem>
  )
}

export default NoteItem
