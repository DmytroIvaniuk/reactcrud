import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RenderUser from "./RenderUser";
import RenderError from "./RenderError";
import { ContextStore } from "../contexts/ContextStore";
import CreateUserButton from "./Buttons/CreateUserButton";

const UpdateCurrentUser = ({ user }) => {
    const store = useContext(ContextStore);
    let url = store.url;
    const userID = store.userID;
    const setContent = store.setContent;
    const setUser = store.setUser;
    const [response, setResponse] = useState(null);
    const userURL = url + userID;
    useEffect(() => {
        if (userID) {
            axios.put(userURL, user)
                .then(setResponse)
                .catch((error) => {
                    setContent(<RenderError
                        error={error}
                        status={error.response.status} />)
                });
        }
    }, [user]);
    if (response) {
        setUser(response.data);
        console.log(response.data);
        return (
            <>
                <RenderUser user={response.data} />
                <CreateUserButton />
                <p>User successfully updated at {response.data.updatedAt}</p>
            </>
        );
    }
}

export default UpdateCurrentUser;
