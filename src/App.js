import SearchUserForm from "./components/SearchUserForm";
import { useState } from "react";
import { ContextStore } from "./contexts/ContextStore";
import Content from "./components/Content";

function App() {
  let url = 'https://reqres.in/api/users/';
  const [user, setUser] = useState({
    name: "",
    job: ""
  });
  const [name, setName] = useState(user.name);
  const [job, setJob] = useState(user.job ??= "");
  const [userID, setUserID] = useState("");
  const [content, setContent] = useState(null);

  return (
    <div className="App">
      <ContextStore.Provider value={{ setContent, userID, url, user, setUser, name, setName, job, setJob }}>
        <SearchUserForm setUserID={setUserID} />
        <Content content={content} />
      </ContextStore.Provider>
    </div>
  );
}

export default App;
