import SearchUserForm from "./components/SearchUserForm";
import { useState } from "react";

function App() {
  const [userID, setUserID] = useState("");
  let url = 'https://reqres.in/api/users/';
  const [content, setContent] = useState(null);

  return (
    <div className="App">
      <SearchUserForm
        setUserID={setUserID}
        setContent={setContent} />
      {content}
    </div>
  );
}

export default App;
