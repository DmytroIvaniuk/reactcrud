import axios from "axios";
import { useState, useEffect, useContext } from "react";
import RenderUser from "./RenderUser";
import RenderError from "./RenderError";
import { ContextStore } from "../contexts/ContextStore";

function GetSingleUser({ userID }) {
    const store = useContext(ContextStore);
    let url = store.url;
    const setContent = store.setContent;
    const setUser = store.setUser;
    const [response, setResponse] = useState(null);
    const userURL = url + userID;
    useEffect(() => {
        if (userID) {
            axios.get(userURL)
                .then(setResponse)
                .catch((error) => {
                    setContent(<RenderError
                        error={error}
                        status={error.response.status} />)
                });
        }
    }, [userURL]);
    if (response) {
        let user = response.data.data;
        user.name = `${user.first_name} ${user.last_name}`;
        setUser(user);
        return (
            <RenderUser user={user} />
        );
    }
}

export default GetSingleUser;
