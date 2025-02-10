import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NewNote from './components/NewNote'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useMemo } from 'react'

export type Note = {
  id: string,
} & NoteData //this gives all the properties of notedata to note and also adds id to it

export type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[];
} 

export type Tag = {
  id: string,
  label: string
}

export type RawNote = {
  id: string,
} & RawNoteData

export type RawNoteData = {
  title: string,
  markdow: string,
  tagIds: string[]
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);
  
  const noteswithTags = useMemo(() =>{
    return notes.map(note =>{
      return {...note, tags:tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])

  function onCreateNote({tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidV4()}]
    })
  }
  return (
    <Container className='my-4'>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path="new" element = {<NewNote />} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="*" element={<Navigate to= "/" />} />
    </ Routes>
    </Container>
  )
}

export default App
