import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useMemo, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
  value: string;
};

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  console.log("🔍 Fetching stored tags from localStorage:", tags);

  // Ensure tags sync correctly on mount (important for Strict Mode)
  useEffect(() => {
    setTags((prevTags) => {
      console.log("🔄 Syncing Tags:", prevTags);
      return prevTags; // Ensures state is properly initialized
    });
  }, []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => ({
      ...note,
      tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
    }));
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
    ]);
    console.log("📌 New Note Created:", data);
  }

  function onAddTag(newTag: Tag) {
    console.log("➕ Adding new tag:", newTag);

    setTags((prevTags) => {
      console.log("📌 Previous Tags:", prevTags);

      const exists = prevTags.some(
        (tag) => tag.label.toLowerCase() === newTag.label.toLowerCase()
      );

      if (!exists) {
        const updatedTags = [...prevTags, newTag];
        console.log("✅ Updated Tags:", updatedTags);
        return updatedTags;
      }

      console.log("⚠️ Tag already exists, skipping.");
      return prevTags;
    });
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={onAddTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
