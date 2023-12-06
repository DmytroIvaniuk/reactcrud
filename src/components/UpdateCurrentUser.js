import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RenderUser from "./RenderUser";
import Buttons from "./Buttons";
import RenderError from "./RenderError";
import { ContextStore } from "../contexts/ContextStore";

const UpdateUser = ({ user, userID }) => {
    const store = useContext(ContextStore);
    let url = store.url;
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
    }, [userURL]);
    if (response) {
        console.log(response.data);
        setUser(response.data);
        return (
            <>
                <RenderUser user={response.data} />
                <Buttons />
                <p>User successfully updated at {response.data.updatedAt}</p>
            </>
        );
    }
}

export default UpdateUser;
