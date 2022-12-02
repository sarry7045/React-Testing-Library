import { render, screen, fireEvent,waitFor } from "@testing-library/react";
import App from "../App";

test("Comments gets displayed after submitting", async () => {
  render(<App />);

  //  we have Multiple way get any key like =  getByText , queryByText, findByText

  // getByText = if condition false hua then direct thrown error kar dega
  // queryByText = isme if condition false hui toh null paas kar dega
  // findByText = isme same as queryByText but isme async await use krna hota hai

  const checkBox = screen.getByLabelText("I agree", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });

  const commentInput = screen.getByPlaceholderText("Write your Comment here", {
    exact: false,
  });

  // use of fireEvent = jitne bhi onClick or onChange wali functionality rehti hai wo fireEvent se karte hai

  fireEvent.change(commentInput, { target: { value: "something" } });
  fireEvent.click(checkBox);
  fireEvent.click(submitButton);

  // const commentLi = screen.getByText("something", { exact: false });
  const commentLi = await screen.findByText("something", { exact: false });
  expect(commentLi).toBeInTheDocument();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("Multiple Comments gets displayed after submitting", async () => {
  render(<App />);

  const checkBox = screen.getByLabelText("I agree", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });

  const commentInput = screen.getByPlaceholderText("Write your Comment here", {
    exact: false,
  });

  fireEvent.change(commentInput, { target: { value: "something" } });
  fireEvent.click(checkBox);
  fireEvent.click(submitButton);

  fireEvent.change(commentInput, { target: { value: "something2" } });
  fireEvent.click(submitButton);

  // const commentLi = screen.getAllByRole("listitem");
  // const commentLi = await screen.findAllByRole("listitem");
  // expect(commentLi.length).toBe(commentLi.length);


  // use of waitFor = ye hamare response k liye wait krta hai ,and isme hum ek specific time define krr sakte hai response aane tak ka
  // jest.setTimeout(300000)
  
  await waitFor(() => {
    const commentLi = screen.getAllByRole('listitem')
    expect(commentLi.length).toBe(commentLi.length)
})
});
