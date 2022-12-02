import React from "react";

const CommitList = ({ allcomments }) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  if (allcomments.length === 0) {
    return (
      <div className="container">
        <h5> No Comments!</h5>
      </div>
    );
  }
  return (
    <>
      <div className="container" style={myStyle}>
        <h4 className="my-3">Listed Comments:</h4>
        <div>
          <ul>
            {allcomments.map((item) => {
              return <li key={item.id}> {item.text}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommitList;
