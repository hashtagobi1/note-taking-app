import { NoteData, Tag } from "../types/allTypes";
import NoteForm from "./NoteForm";

type Props = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const NewNote = ({ onSubmit, availableTags, onAddTag }: Props) => {
  return (
    <div>
      <h1 className="mb-4">New Note </h1>
      <NoteForm
        onSubmit={onSubmit}
        availableTags={availableTags}
        onAddTag={onAddTag}
      />
    </div>
  );
};

export default NewNote;
