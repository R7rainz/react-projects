import { NoteData, Tag } from "@/App"

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
}

export function EditNote({onSubmit, onAddTag, availableTags}:EditNoteProps){
    const note = useNote();
}