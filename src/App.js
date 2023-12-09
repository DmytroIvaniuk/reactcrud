import SearchUserForm from "./components/SearchUserForm";
import { useState } from "react";
import { ContextStore } from "./contexts/ContextStore";
import Content from "./components/Content";
import Loader from "./components/Loader";

function App() {
  let url = 'https://reqres.in/api/users/';
  const [user, setUser] = useState({
    name: "",
    job: ""
  });
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState("");
  const [content, setContent] = useState(null);

  return (
    <div className="App">
      {loading ? <Loader /> : <ContextStore.Provider value={{
        setContent,
        userID,
        url,
        user,
        setUser,
        loading,
        setLoading
      }}>
        <SearchUserForm setUserID={setUserID} />
        <Content content={content} />
      </ContextStore.Provider>}
    </div>
  );
}

export default App;
