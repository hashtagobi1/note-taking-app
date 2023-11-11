import { v4 as uuidv4 } from "uuid";

export const defaultNotes = [
  {
    id: uuidv4(),
    title: "Shopping list",
    tagIds: ["groceries"],
    markdown: `- Lorem ipsum
    - dolor
    - sit
    - amet
    - duis `,
  },
  {
    id: uuidv4(),
    title: "Music Concert",
    tagIds: ["music", "leisure"],
    markdown:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in semper ligula. Nunc vitae faucibus nisl, vel suscipit metus. Duis viverra, quam lobortis dapibus faucibus, nulla urna laoreet ex, sit amet mattis ex dolor nec mauris. Aliquam dapibus dolor turpis, sit amet efficitur nisl ullamcorper id. Aenean in lectus sit amet nisi tempus iaculis ut pharetra felis. Suspendisse ac dignissim tellus, quis maximus diam. Sed mattis sollicitudin justo, ac imperdiet tortor condimentum sed. Fusce aliquam eleifend quam, vitae semper lorem pellentesque vitae. Phasellus tempus mauris eu nisi pellentesque interdum",
  },
];

export const defaultTags = [
  {
    id: uuidv4(),
    label: "groceries",
  },
  {
    id: uuidv4(),
    label: "music",
  },
  {
    id: uuidv4(),
    label: "leisure",
  },
];
