import axios from "axios";
import { useEffect, useState } from "react";
import RenderButtons from "./RenderButtons";
import RenderError from "./RenderError";

const DeleteUser = ({ userID, setContent }) => {
    let url = 'https://reqres.in/api/users/';
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
                <RenderButtons setContent={setContent} />
            </>
        );
    }
}

export default DeleteUser;
