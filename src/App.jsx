import Header from "./Components/Header";
import Form from "./Components/Form";
import CommitList from "./Components/CommentList";
import { useState } from "react";

const App = () => {
  const [comments, setComments] = useState([]);

  return (
    <div className="App" data-testid="rootdev">
      <Header />
      <Form setComments={setComments} />
      <hr />
      <CommitList allcomments={comments} />
    </div>
  );
};

export default App;
