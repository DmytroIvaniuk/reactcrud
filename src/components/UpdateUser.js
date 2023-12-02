import axios from "axios";
import { useEffect, useState } from "react";
import RenderUser from "./RenderUser";
import RenderButtons from "./RenderButtons";
import RenderError from "./RenderError";

const UpdateUser = ({ user, userID, setContent }) => {
    let url = 'https://reqres.in/api/users/';
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
        return (
            <>
                <RenderUser user={response.data} />
                <RenderButtons setContent={setContent} />
                <p>User successfully updated at {response.data.updatedAt}</p>
            </>
        );
    }
}

export default UpdateUser;
