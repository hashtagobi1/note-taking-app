import { NoteData, Tag } from "../types/allTypes";
import NoteForm from "./NoteForm";
import { useNote } from "./NoteLayout";

type Props = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({ onSubmit, availableTags, onAddTag,  }: Props) => {
  const note = useNote();
  return (
    <div>
      <h1 className="mb-4">Edit Note </h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        availableTags={availableTags}
        onAddTag={onAddTag}
      />
    </div>
  );
};

export default EditNote;
