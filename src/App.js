import SearchUserForm from "./components/SearchUserForm";
import { useState } from "react";
import { ContextStore } from "./contexts/ContextStore";
import Content from "./components/Content";

function App() {
  let url = 'https://reqres.in/api/users/';
  const [userID, setUserID] = useState("");
  const [content, setContent] = useState(null);
  const [user, setUser] = useState({
    name: "",
    job: ""
  });

  return (
    <div className="App">
      <ContextStore.Provider value={{ setContent, userID, url, user, setUser }}>
        <SearchUserForm setUserID={setUserID} />
        <Content content={content} />
      </ContextStore.Provider>
    </div>
  );
}

export default App;
