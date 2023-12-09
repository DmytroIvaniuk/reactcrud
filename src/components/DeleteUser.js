import axios from "axios";
import { useEffect, useState, useContext } from "react";
import RenderError from "./RenderError";
import { ContextStore } from "../contexts/ContextStore";
import CreateUserButton from "./Buttons/CreateUserButton";

const DeleteUser = () => {
    const store = useContext(ContextStore);
    let url = store.url;
    const userID = store.userID;
    const setContent = store.setContent;
    const [response, setResponse] = useState(null);
    let userURL = url + userID;
    useEffect(() => {
        if (userID === 0) {
            return;
        }
        if (userID) {
            axios.delete(userURL)
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
        return (
            <>
                <p className="delete-message">
                    User with ID {userID} successfully deleted!</p>
                <CreateUserButton />
            </>
        );
    }
}

export default DeleteUser;
