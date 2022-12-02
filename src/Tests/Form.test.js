import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import Form from "../Components/Form.jsx";

// describe("We can also store multiple test cases in this", () => {
//     test 1 ,
//     test 2
// })

test("Initial Conditins", () => {
  render(<Form />);
  const commentInput = screen.getByRole("textbox");

  // use of toBeInTheDocument = Ye document me available hai ya nhi check krta hai
  expect(commentInput).toBeInTheDocument();
  const checkBox = screen.getByLabelText("i agree", {
    exact: false,
  });
  expect(checkBox).toBeInTheDocument();

  // We are checking ki hamare is component me button exist krta hai ya nahi - using getRole method
  // ues of exact:false = agar name capital me bhi hoga phir wo catch karr lega

  const submitButton = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });
  expect(submitButton).toBeDisabled();

  // use of logRoles = Its define ki kisi ek div k under jo jo code hai uska role kya hai
//   logRoles(screen.getByTestId("rootdev"));
});

test("Enabel submit button on type and checkbox click", () => {
  render(<Form />);
  const checkBox = screen.getByLabelText("I agree", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });
  // we can catch any things with multiple ways like getByPlaceholderText and getByRole etc
  const commentInput = screen.getByPlaceholderText("Write your Comment here", {
    exact: false,
  });

  // We are defining ki Input text me kuch na kuch value hona he chahiye warna tab tak button disable he rahega and checkbox bhi cliked hona chahiye
  fireEvent.change(commentInput, { target: { value: "something" } });
  fireEvent.click(checkBox);
  expect(submitButton).toBeEnabled();

  // If user phirse checkbox ko untick karde then phirse wo disable ho jaaye
  fireEvent.click(checkBox);
  expect(submitButton).toBeDisabled();

  // we can use useEvent also instead of fireEvent
});
