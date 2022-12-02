import React, { useState } from "react";

const Home = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  // const addComments = () => {
  //   setComments((prev) => [...prev, { id: Date.now(), text: text }]);
  //   setText("");
  // };

  const postComments = async () => {
    const res = await fetch("http://localhost:5000/addcomment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    const result = await res.json();
    setComments((prev) => [...prev, result]);
    setText("");
  };
  return (
    <>
      <div className="container my-4" data-testid="rootdev">
        <h4 className="my-4">Comment Form:</h4>
        <form>
          <div className="mb-3 my-4">
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Write your comment here.."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-3 mt-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label class="form-check-label" htmlFor="checkbox">
                I agree{" "}
              </label>
            </div>
          </div>
          <button
            disabled={!checked || !text}
            type="submit"
            onClick={postComments}
            className="btn btn-sm btn-success my-4"
          >
            Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
