import { render, screen } from "@testing-library/react";
import CommitList from "../Components/CommentList";

test("When comments are not available", () => {
  // we are defing = If hamara comment wala array empty hoga tabb
  render(<CommitList allcomments={[]} />);
  const element = screen.getByText("No Comments", { exact: false });
  expect(element).toBeInTheDocument();
});

test("List all Comments", () => {
  // we are defining = if hamare Connemt wale array me values hoga and wo kis format me hooga

  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
  ];

  render(<CommitList allcomments={comments} />);

  // use of queryByText = jab "No Comments" karke koi component na present ho then ye list dikhao
  const element = screen.queryByText("No Comments", { exact: false });
  // use of toBeInTheDocument = If comment array me koi value hai soo ye nhi dikhana hai
  expect(element).not.toBeInTheDocument();


  // use of getAllByRole = use for multiple data's
  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(comments.length);
});
