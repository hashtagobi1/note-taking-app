import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";

type NoteProps = {
  onDelete: (id: string) => void;
};

const Note = ({ onDelete }: NoteProps) => {
  const navigate = useNavigate();
  const note = useNote();
  return (
    <>
      <Row className="align-items-center mb-4 ">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack>
              <Stack gap={1} direction="horizontal" className=" flex-wrap">
                {note.tags.map((tag) => (
                  <Badge className="text-truncate" id={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </Stack>
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate("/");
                toast.success(`Successfully Deleted the note: ${note.title}`);
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="..">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown className={"border p-3 rounded shadow-sm"}>
        {note.markdown}
      </ReactMarkdown>
    </>
  );
};

export default Note;
